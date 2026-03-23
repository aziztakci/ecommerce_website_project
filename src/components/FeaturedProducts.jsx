import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

function FeaturedProducts({ data, reverse }) {
    const [activeTab,setActiveTab] = useState(data.tabs[0]);



  return (
    <section className={`flex flex-col px-10 md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-center pt-12 md:pt-0 items-center md:items-start md:gap-7.5 pb-28 md:pb-12.5`}>
      <div className="relative w-97.25 h-166 md:h-199 border border-disabled-element shrink-0">
        <img className="absolute top-0 left-0 object-cover w-full h-full " src={data.image} alt={data.imageTitle} />
        <h6 className="absolute top-0 left-0 pl-6 md:pl-12 pt-6 text-text text-[14px] font-montserrat font-bold ">{data.imageTitle}</h6>
        <h6 className="absolute top-0 left-0 pl-6 md:pl-12 pt-13.25 text-second-text text-[14px] font-montserrat font-bold ">{data.imageText}</h6>
      </div> {/* left image section done */}
      <div className="flex flex-col max-w-164.5">
        <div className="flex flex-col  md:flex-row md:justify-between  md:flex-wrap md:w-auto  gap-6 md:gap-6.75 items-center md:pb-2.5">
          <h5 className="font-montserrat font-bold w-41 self-start sm:self-auto sm:w-auto text-text pt-20 md:pt-0 pb-6 md:pb-0 text-[24px] md:text-[16px]">{data.title}</h5>
          <nav className="">
            <ul className="flex gap-10">
             {data.tabs.map((tab, i) => (
          <li key={i}>
            <button
              onClick={() => setActiveTab(tab)} 
              className={`font-montserrat font-bold text-[14px] transition-colors
                ${activeTab === tab 
                  ? "text-primary border-primary" 
                  : "text-second-text"
                }`}
            >
              {tab}
            </button>
          </li>
            ))}
            </ul>
          </nav>
          <div className="flex gap-3.75 pb-6 md:pb-0">
            <ChevronLeft className="w-5.5 h-5.5 border border-second-text text-second-text rounded-full p-2 box-content cursor-pointer"/>
            <ChevronRight className="w-5.5 h-5.5 border border-second-text text-second-text rounded-full p-2 box-content cursor-pointer"/>
          </div>
            </div> {/* Bestseller nav bar done */}

            <div className="border border-light-gray-2 w-auto mb-2.5 md:mb-4.5"></div> {/* /br */}

        <div className=" flex flex-col pt-6 md:flex-row md:flex-wrap min-w-94 md:min-w-full max-w-164.25 grow gap-7.5 justify-center items-center"> {/*  state'i kullanarak (datayı düzenledikten sonra, ek görsel bilgi vs gelirse) ternary if ile veriyi güncelleyebilirsin */}
        {/* !!!TODO!!! tanStack Query ile 6 değil-12 görseli axios ile çekip, 2 sayfaya böl/ en son iş-önce homepage i komple bitir!!! */}
              {data.products.map((product)=>(
                <div key={product.id} className="flex flex-col bg-white w-full min-h-147.25 md:min-h-0 max-w-87 md:max-w-45.75 md:max-h-81 justify-center items-center gap-2.5"> {/* tüm yapı bittiğinde bg-colorı componentin tamanına uygula */}
                    <img src={product.image} alt={product.name} className="w-full pt-6 md:pt-0"/>
                    <h5 className="font-montserrat font-bold text-text text-[16px] pt-15 md:pt-3.75">{product.name}</h5>
                    <a href="#" className="font-montserrat font-bold text-second-text text-[14px]">{product.department}</a>
                    <div className="flex pb-8.75 gap-1.25">
                        <h5 className="font-montserrat font-bold text-muted text-[16px] py-1.25">{product.priceOld}</h5>
                        <h5 className="font-montserrat font-bold text-secondary-1 text-[16px] py-1.25">{product.priceNew}</h5>
                    </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
