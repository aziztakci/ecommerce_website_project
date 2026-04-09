import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageContent from "../../layout/PageContent";
import { fetchProducts } from "../../store/actions/productActions";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList, fetchState } = useSelector((state) => state.product);

  useEffect(() => {    
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="min-h-100">      
      {fetchState === "FETCHING" && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
          <p className="font-montserrat font-bold text-primary">Ürünler Yükleniyor...</p>
        </div>
      )}
      
      {fetchState === "FETCHED" && (
        <PageContent className="max-w-281 px-10 flex flex-col md:flex-row md:gap-5 md:flex-wrap md:items-center justify-center md:justify-between">
          {productList.map((e) => (
            <div
              key={e.id}
              onClick={() => handleProductClick(e.id)}
              className="flex flex-col w-full md:w-59.75 text-center py-12 items-center pb-12 cursor-pointer group"
            >
              {/* API'den gelen resim yapısı: images[0].url */}
              <div className="overflow-hidden mb-4 h-[full]">
                <img
                  src={e.images?.[0]?.url || "https://via.placeholder.com/300"}
                  alt={e.name}
                  className="w-87 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h4 className="font-montserrat font-bold text-text text-[14px] pt-5">
                {e.name}
              </h4>
              
              <p className="font-montserrat text-[14px] text-second-text line-clamp-1 px-2">
                {e.description}
              </p>

              <div className="flex gap-1.25 pt-6">                
                <h5 className="font-montserrat font-bold text-muted text-[16px] py-1.25 line-through">
                  ${(e.price * 1.2).toFixed(2)}
                </h5>
                <h5 className="font-montserrat font-bold text-secondary-1 text-[16px] py-1.25">
                  ${e.price}
                </h5>
              </div>

              <div className="pt-5 gap-1.5 flex ">
                <span className="h-4 w-4 rounded-full bg-primary"></span>
                <span className="h-4 w-4 rounded-full bg-secondary-1"></span>
                <span className="h-4 w-4 rounded-full bg-alert"></span>
                <span className="h-4 w-4 rounded-full bg-dark-background"></span>
              </div>
            </div>
          ))}
        </PageContent>
      )}
      
      {fetchState === "FAILED" && (
        <div className="text-center py-20 font-montserrat text-alert">
          Something went wrong, please try again.
        </div>
      )}
    </section>
  );
}

export default Products;