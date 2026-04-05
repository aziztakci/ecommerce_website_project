import React from "react";
import PageContent from "../../layout/PageContent";

function AboutBottom({ aboutContent, isLoading }) {
  if (isLoading) return null;
  const bottom = aboutContent.bottom;

  return (
    <section className="flex w-full h-auto md:h-159 overflow-hidden">
      
      <div className="bg-hover flex flex-col justify-center gap-6 p-10 md:p-48.75 w-full ">
        <h5 className="font-bold text-light-text text-[16px]">
          {bottom.subtitle}
        </h5>
        <h2 className="font-bold text-light-text text-[40px] leading-tight">
          {bottom.title}
        </h2>
        <p className="font-normal text-light-text text-[14px] whitespace-pre-line">
          {bottom.description}
        </p>
        <div className="flex">
          <button className="font-bold text-light-text text-[14px] border border-light-text px-10 py-3.75 rounded-[5px] hover:bg-light-text hover:text-hover">
            {bottom.button}
          </button>
        </div>
      </div>

      <img
        src={bottom.image}
        alt="bot-image"
        className="hidden lg:block object-cover h-full"
      />
    </section>
  );
}

export default AboutBottom;
