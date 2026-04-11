import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../store/actions/productActions.js";
import { useProductData } from "../hooks/useProductData.js";
import InfoTop from '../components/shopPage/InfoTop.jsx';
import ProductDetail from '../components/productDetail/ProductDetail.jsx';
import ProductInfo from '../components/productDetail/ProductInfo.jsx';
import NavTab from '../components/productDetail/NavTab.jsx';
import Bestseller from '../components/homePage/Bestseller.jsx';
import BrandLogos from '../components/homePage/BrandLogos.jsx';

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, fetchState } = useSelector((state) => state.product);
  const { data, isLoading } = useProductData();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
    window.scrollTo(0, 0); 
  }, [dispatch, productId]);
  
  if (fetchState === "FETCHING" || !data) {
    return (
      <div className="py-40 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <p className="mt-4 text-primary font-bold text-xl">Yükleniyor...</p>
      </div>
    );
  }

  if (fetchState === "FAILED") {
    return (
      <div className="py-20 text-center">
        <h2 className="text-alert font-bold text-2xl">Ürün bulunamadı.</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-primary underline">Geri dön</button>
      </div>
    );
  }

  return (
    <div>      
      <div className="max-w-272.5 mx-auto px-5 pt-5">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary font-bold hover:text-secondary-1 transition-colors"
        >
          <span className="text-xl">&lt;</span> Back
        </button>
      </div>      
      
      {product && product.id && (
        <>
          <InfoTop data={data} />
          <ProductDetail product={product} />
          <NavTab dataTabs={data.tabs} />
          <ProductInfo  data={data.content} />
          <Bestseller data={data} isLoading={isLoading} />
          <BrandLogos />
        </>
      )}
    </div>
  );
}

export default ProductDetailPage;