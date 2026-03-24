import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../contexts/GlobalContext";

function Bestseller() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const bestsellerContent = allData[lang].bestsellerProducts;

  return (
    <section className=" bg-light-gray-1 py-12 px-10 w-full leading-none ">
      <div className="flex flex-col max-w-262.5 mx-auto">
        <h3 className="font-montserrat font-bold text-text text-[24px]  pb-6">{bestsellerContent.title}</h3>
        <div className="border border-light-gray-2 w-full mb-6 md:mb-4.5"></div>{/* /br */}
        
        <div className="flex flex-col gap-7.5 justify-center md:justify-between md:flex-row md:flex-wrap lg:flex-nowrap">
          {bestsellerContent.products.map((e) => (
            <div key={e.id} className="flex flex-col gap-6.25  ">
              <img src={e.image} alt={e.name} />
              <div className="flex flex-col justify-center">
                <h5 className="font-montserrat font-bold text-text text-[16px]">{e.name}</h5>
                <a
                  href="#"
                  className="font-montserrat font-bold text-text text-[14px] pt-5"
                >
                  {e.department}
                </a>
                <div className="flex  gap-1.25 pt-6 pb-0 md:pb-10">
                  <h5 className="font-montserrat font-bold text-muted text-[16px] py-1.25">
                    {e.priceOld}
                  </h5>
                  <h5 className="font-montserrat font-bold text-secondary-1 text-[16px] py-1.25">
                    {e.priceNew}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bestseller;
