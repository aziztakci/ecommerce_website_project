import React, { useState, useEffect } from "react"; 
import PageContent from "../../layout/PageContent";
import { Star, Heart, ShoppingCart ,Eye } from 'lucide-react';


function ProductDetail({ data }) {
  const detailContent = data;
  const images = detailContent.images;
  const [currentImage, setCurrentImage] = useState(images.main);

  useEffect(() => {
    setCurrentImage(images.main);
  }, [images.main]);

  return (
    <section className="bg-light-gray-1">
      <PageContent className="detailcontainer flex flex-col md:flex-row gap-[30px] justify-center md:gap-[34px] max-w-[1090px] px-5">
        <div className="imagecontainer flex flex-col items-center md:items-start gap-[42px] md:gap-5">
          <img
            className="w-full max-w-[506px] h-auto  object-cover transition-all duration-300"
            src={currentImage}
            alt="product"
          />
          <div className="flex gap-5">
            {images.gallery.map((e, i) => (
              <img
                key={i}
                onClick={() => setCurrentImage(e)}
                className={`w-[100px] h-[75px] object-cover cursor-pointer transition-opacity hover:opacity-80 ${
                  currentImage === e
                    ? "opacity-50"
                    : "opacity-100 hover:opacity-80"
                }`}
                src={e}
                alt={`gallery-thumb-${i}`}
              />
            ))}
          </div>
        </div>
        <div className="textcontainer flex flex-col mx-auto w-full md:w-[515px] px-[26px]">
          <h4 className="font-normal text-text text-[20px] pt-2.5">{detailContent.title}</h4>
          <div className="ratescore flex gap-2.5 pt-3">   
            <div className="flex gap-1.25">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}                
                fill={star <= Number(detailContent.stars || 0) ? "#F3CD03" : "none"}
                color="#F3CD03"
              />
            ))}
            </div>         
            
            <h6 className="font-bold text-[14px] text-second-text ">{detailContent.reviews}</h6>
          </div>
          <h3 className="font-bold text-text text-[24px] pt-5">{detailContent.price}</h3>
          <h6 className="font-bold text-second-text text-[14px] pt-1.25">{detailContent.availabilityText}
            <span className="font-bold text-primary text-[14px]">{detailContent.availability}</span>
          </h6>
          <p className="font-normal text-light-text-gray-3 pt-8 pb-4 md:pb-[25px]">{detailContent.description}</p>
          
         
          <div className="border border-light-gray-2 w-full"></div>
          {/* /br */}
          <div className="pt-5 gap-1.5 flex pt-[30px] pb-[62px]">  
            <span className="h-7 w-7  rounded-full bg-primary"></span>
            <span className="h-7 w-7  rounded-full bg-secondary-1"></span>
            <span className="h-7 w-7  rounded-full bg-alert"></span>
            <span className="h-7 w-7  rounded-full bg-dark-background"></span>
          </div>
          <div className="flex gap-2.5 items-center">
            <button className="font-bold text-light-text text-[14px] leading-none px-5 py-4 bg-primary rounded-[5px] ">{detailContent.button}</button>
            <div className="iconcontainer flex gap-2.5">
            <Heart className="w-5.5 h-5.5 border border-light-gray-3 text-pure-black rounded-full p-2 box-content cursor-pointer"/>
            <ShoppingCart className="w-5.5 h-5.5 border border-light-gray-3 text-pure-black rounded-full p-2 box-content cursor-pointer"/>
            <Eye className="w-5.5 h-5.5 border border-light-gray-3 text-pure-black rounded-full p-2 box-content cursor-pointer"/>
            </div>
          </div>
        </div>
      </PageContent>
    </section>
  );
}

export default ProductDetail;
