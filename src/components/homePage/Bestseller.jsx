import React from "react";

function Bestseller({ data, isLoading }) {
  if (isLoading) return null;
  const bestsellerContent = data.bestsellerProducts;

  return (
    <section className="bg-light-gray-1 py-12 px-5 md:px-10 w-full leading-none">
      <div className="flex flex-col max-w-[1090px] mx-auto">
        <h3 className="font-montserrat font-bold text-text text-[24px] pb-6">
          {bestsellerContent.title}
        </h3>
        
        <div className="border-b border-light-gray-2 w-full mb-6 md:mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-12">
          {bestsellerContent.products.map((e) => (
            <div key={e.id} className="flex flex-col bg-white">
              
              <div className="w-full overflow-hidden">
                <img 
                  src={e.image} 
                  alt={e.name} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex flex-col p-6 items-start">
                <h5 className="font-montserrat font-bold text-text text-[16px] truncate w-full">
                  {e.name}
                </h5>
                <a
                  href="#"
                  className="font-montserrat font-bold text-second-text text-[14px] pt-3"
                >
                  {e.department}
                </a>
                <div className="flex gap-2.5 pt-4">
                  <h5 className="font-montserrat font-bold text-muted text-[16px]">
                    {e.priceOld}
                  </h5>
                  <h5 className="font-montserrat font-bold text-secondary-1 text-[16px]">
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