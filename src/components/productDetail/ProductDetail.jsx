import React, { useState, useEffect } from "react"; 
import PageContent from "../../layout/PageContent";
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

function ProductDetail({ product }) { 
  if (!product || !product.images) return null;  
  const [currentImage, setCurrentImage] = useState(product.images[0]?.url);
  
  useEffect(() => {
    setCurrentImage(product.images[0]?.url);
  }, [product.id, product.images]);

  return (
    <section className="bg-light-gray-1">
      <PageContent className="detailcontainer flex flex-col md:flex-row gap-7.5 justify-center md:gap-8.5 max-w-272.5 px-5">
        <div className="imagecontainer flex flex-col items-center md:items-start gap-10.5 md:gap-5">
          <img
            className="w-full max-w-126.5 h-auto object-cover transition-all duration-300 rounded-lg"
            src={currentImage}
            alt={product.name}
          />
          <div className="flex gap-5">           
            {product.images.map((img, i) => (
              <img
                key={i}
                onClick={() => setCurrentImage(img.url)}
                className={`w-25 h-18.75 object-cover cursor-pointer transition-opacity hover:opacity-80 ${
                  currentImage === img.url
                    ? "opacity-50 ring-2 ring-primary"
                    : "opacity-100"
                }`}
                src={img.url}
                alt={`gallery-thumb-${i}`}
              />
            ))}
          </div>
        </div>

        <div className="textcontainer flex flex-col mx-auto w-full md:w-128.75 px-6.5">          
          <h4 className="font-normal text-text text-[20px] pt-2.5">{product.name}</h4>          
          <div className="ratescore flex gap-2.5 pt-3">   
            <div className="flex gap-1.25">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}                
                  fill={star <= Math.round(product.rating) ? "#F3CD03" : "none"}
                  color="#F3CD03"
                />
              ))}
            </div>         
            
            <h6 className="font-bold text-[14px] text-second-text ">({product.sell_count} Reviews)</h6>
          </div>          
          <h3 className="font-bold text-text text-[24px] pt-5">${product.price}</h3>
          <h6 className="font-bold text-second-text text-[14px] pt-1.25">
            Availability:{" "}
            <span className={`font-bold text-[14px] ${product.stock > 0 ? "text-primary" : "text-alert"}`}>
              {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
            </span>
          </h6>
          <p className="font-normal text-light-text-gray-3 pt-8 pb-4 md:pb-6.25">{product.description}</p>          
          <div className="border border-light-gray-2 w-full"></div>

          <div className="gap-1.5 flex pt-7.5 pb-15.5">  
            <span className="h-7 w-7 rounded-full bg-primary cursor-pointer hover:ring-2 ring-offset-2 ring-primary"></span>
            <span className="h-7 w-7 rounded-full bg-secondary-1 cursor-pointer hover:ring-2 ring-offset-2 ring-secondary-1"></span>
            <span className="h-7 w-7 rounded-full bg-alert cursor-pointer hover:ring-2 ring-offset-2 ring-alert"></span>
            <span className="h-7 w-7 rounded-full bg-dark-background cursor-pointer hover:ring-2 ring-offset-2 ring-dark-background"></span>
          </div>

          <div className="flex gap-2.5 items-center">
            <button className="font-bold text-light-text text-[14px] leading-none px-5 py-4 bg-primary rounded-[5px] transition-transform active:scale-95">
              Add to Cart
            </button>
            <div className="iconcontainer flex gap-2.5">
              <Heart className="w-5.5 h-5.5 border border-light-gray-3 text-pure-black rounded-full p-2 box-content cursor-pointer hover:bg-light-gray-2 transition-colors"/>
              <ShoppingCart className="w-5.5 h-5.5 border border-light-gray-3 text-pure-black rounded-full p-2 box-content cursor-pointer hover:bg-light-gray-2 transition-colors"/>
              <Eye className="w-5.5 h-5.5 border border-light-gray-3 text-pure-black rounded-full p-2 box-content cursor-pointer hover:bg-light-gray-2 transition-colors"/>
            </div>
          </div>
        </div>
      </PageContent>
    </section>
  );
}

export default ProductDetail;