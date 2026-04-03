import React from "react";
import PageContent from "../../layout/PageContent";
import { useNavigate } from "react-router-dom";

function Products({ data }) {
  const productContent = data;
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate("/product")
    // navigate(`/product/${productId}`);
  };

  return (
    
      <PageContent className="max-w-281 px-10 flex flex-col md:flex-row md:gap-5 md:flex-wrap md:items-center justify-center md:justify-between">
        {productContent.map((e) => (
          <div key={e.id} onClick={()=> handleProductClick(e.id)} className="flex flex-col w-full md:w-59.75 text-center py-12  items-center pb-12">
            <img src={e.image} alt={e.name} className="w-87 h-[full] cursor-pointer" />
            <a
              href="#"
              className="font-montserrat font-bold  text-text text-[14px] pt-5"
            >
              {e.name}
            </a>

            <div className="flex  gap-1.25 pt-6">
              <h5 className="font-montserrat font-bold text-muted text-[16px] py-1.25">
                {e.priceOld}
              </h5>
              <h5 className="font-montserrat font-bold text-secondary-1 text-[16px] py-1.25">
                {e.priceNew}
              </h5>
            </div>

            <div className="pt-5 gap-1.5 flex ">
              <span className="h-4 w-4  rounded-full bg-primary"></span>
              <span className="h-4 w-4  rounded-full bg-secondary-1"></span>
              <span className="h-4 w-4  rounded-full bg-alert"></span>
              <span className="h-4 w-4  rounded-full bg-dark-background"></span>
            </div>
          </div>
        ))}
        {/* TODO / pagination temelini kur tanstack ile, bu bölümü ondan sonra yap, göstermelik yapma...!
          yukarı pt verme, üstteki divde verdin, sadece alt satır-bileşen için pb-12 ver.!!!!!!!*/}
      </PageContent>
    
  );
}

export default Products;
