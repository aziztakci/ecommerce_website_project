import React from "react";
import PageContent from "../layout/PageContent";

function CategoriesShopPage({ data }) {
  const catContent = data.categories;

  return (
    <section className="bg-light-gray-1 pb-9.25 md:pb-12">
      <PageContent className="flex flex-col md:flex-row md:flex-wrap items-center justify-center max-w-287 px-7.5 gap-3.75">
        {catContent.map((e) => (
          <div
            key={e.id}
            className="relative overflow-hidden mx-auto w-82.75 h-75 md:w-51 md:h-55.75"
          >
            <img
              src={e.image}
              alt={e.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-filter-black flex flex-col items-center justify-center ">
                <h5 className="font-montserrat font-bold text-light-text text-[16px] ">{e.title}</h5>
                <p className="font-montserrat font-normal text-light-text text-[14px]">{e.items}</p>
            </div>
          </div>
        ))}
      </PageContent>
    </section>
  );
}

export default CategoriesShopPage;
