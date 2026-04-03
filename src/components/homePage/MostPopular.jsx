import React from "react";
import { Download } from 'lucide-react';

function MostPopular({ data, reverse, showView }) {
  return (
   <section className={`flex flex-col md:flex-row justify-center pt-23.5 md:pt-12 items-center md:items-start w-full px-2.5 md:px-10 pb-7.5`}>
      
      <div className={`flex flex-col md:flex-row bg-light-gray-1  w-full max-w-103.5 md:max-w-268.75 overflow-hidden ${reverse ? "md:flex-row-reverse" : ""}`}>
        
        <div className="relative w-full h-126.25 md:h-auto md:w-[62.7%] md:aspect-674/649 overflow-hidden shrink-0">
          <img
            src={data.image}
            alt={data.title}
            className="absolute top-0 left-0 w-full h-full object-cover object-left"
          />
        </div>
        
        <div className="flex flex-col w-full md:w-[37.3%] text-center items-center pb-12">
            <h3 className="font-montserrat font-bold text-text text-[24px]  pt-20">{data.title}</h3>
            <p className="font-montserrat font-normal text-second-text text-[14px] px-[60.5px] pt-12.75 ">{data.description}</p>
            <img src={data.product.image} alt={data.title} className="w-87 h-[full] py-9.25"/>
            <a href="#" className="font-montserrat font-bold text-text text-[14px] pt-5">{data.product.name}</a>
        
            <div className= {`items-center gap-2.5 pt-5 ${showView ? "hidden md:flex" : "flex md:hidden" }`} > 
                 <Download size={14} className="text-second-text"/>
                 <h6 className="text-second-text font-montserrat font-bold text-[14px]">{data.product.text}</h6>
            </div>
         
            <div className="flex  gap-1.25 pt-6">
                <h5 className="font-montserrat font-bold text-muted text-[16px] py-1.25">{data.product.priceOld}</h5>
                <h5 className="font-montserrat font-bold text-secondary-1 text-[16px] py-1.25">{data.product.priceNew}</h5>
            </div>

            <div className={` pt-5 gap-1.5 ${showView ? "hidden md:flex" : "flex md:hidden" }`}>
                <span className="h-4 w-4  rounded-full bg-primary"></span>
                <span className="h-4 w-4  rounded-full bg-secondary-1"></span>
                <span className="h-4 w-4  rounded-full bg-alert"></span>
                <span className="h-4 w-4  rounded-full bg-dark-background"></span>
            </div>

        </div>
        
      </div>
    </section>
  );
}

export default MostPopular;