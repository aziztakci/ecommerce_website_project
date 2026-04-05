import React from "react";
import PageContent from "../../layout/PageContent";

function AboutTop({aboutContent, isLoading}) {
    if (isLoading) return null;
    const top = aboutContent.top;

  return (
    <section className="flex flex-col xl:flex-row max-w-7xl mx-auto  xl:pl-30  pb-35 xl:pr-50 items-center justify-center xl:justify-between gap-46.25 md:gap-20 xl:gap-0">
      <div className="toptextcontainer flex flex-col items-center  xl:items-start pt-31.25 gap-8.75">
        <h5 className="font-bold text-text text-[16px] ">
            {top.subtitle}
        </h5>
        <h1 className="font-bold text-text text-[58px] ">{top.title}</h1>
        <h4 className="font-normal text-second-text text-[20px] whitespace-pre-line">{top.description}</h4>
        <button className="font-bold text-light-text text-[14px] bg-primary px-10 py-3.75 rounded-[5px]">{top.button}</button>
      </div>
      <div className="topimagecontainer relative mr-10 px-5 pb-20 xl:pb-0 xl:px-0 xl:mr-[-10vw]">
        <img src={top.imagebg} alt="image-bg" />
        <img src={top.imagefront} alt="image-shopping" className="absolute top-0 left-0 -mt-12.5 xl:ml-8.75"/>
      </div>
    </section>
  );
}

export default AboutTop;
