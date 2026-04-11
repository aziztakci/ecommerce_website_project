import React, { useEffect } from "react";
import { useShopData } from "../hooks/useShopData";
import InfoTop from "../components/shopPage/InfoTop";
import CategoriesShopPage from "../components/shopPage/CategoriesShopPage";
import Toolbar from "../components/shopPage/Toolbar";
import Products from "../components/shopPage/Products";
import BrandLogos from "../components/homePage/BrandLogos";
import PageNumButons from "../components/shopPage/PageNumButons";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setOffset } from "../store/actions/productActions"; 

function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const { limit, offset } = useSelector((state) => state.product);

  useEffect(() => {
    const urlOffset = Number(searchParams.get("offset")) || 0;

    if (urlOffset !== offset) {
      dispatch(setOffset(urlOffset));
      return; 
    }

    const queryParams = {
      limit: limit,
      offset: offset, 
    };

    if (categoryId) queryParams.category = categoryId;
    
    const filterValue = searchParams.get("filter");
    if (filterValue) queryParams.filter = filterValue;

    const sortValue = searchParams.get("sort");
    if (sortValue) queryParams.sort = sortValue;

    console.log("API'ye giden tam paket:", queryParams);
    dispatch(fetchProducts(queryParams));

  }, [dispatch, categoryId, searchParams, limit, offset]);

  const { data, isLoading, error } = useShopData();

  if (isLoading)
    return (
      <div className="py-20 text-center text-2xl text-primary font-bold">
        Yükleniyor...
      </div>
    );
  if (error) return <div>Bir hata oluştu: {error.message}</div>;

  return (
    <section>
      <InfoTop data={data} />
      <CategoriesShopPage />
      <Toolbar />
      <Products />
      <BrandLogos />
      <PageNumButons />
    </section>
  );
}

export default ShopPage;