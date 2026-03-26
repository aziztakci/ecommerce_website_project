import React from "react";
import { useHomeData } from "../hooks/useHomeData";

function Highlights() {

const { data: homeContent, isLoading } = useHomeData();
if (isLoading) return null;
const highlightContent = homeContent.highlightSection;


  return (
  <section className="flex flex-col bg-light-gray-1 items-center py-20 px-10 md:flex-row md:flex-wrap lg:flex-nowrap justify-center gap-2.5 md:gap-10.75 ">
    {highlightContent.items.map((e)=>(
        <div key={e.id} className="w-83.25 h-58 relative overflow-hidden border border-light-gray-2">
            <img  src={e.image} alt={e.alt} className="absolute top-0 left-0 w-auto h-auto max-w-none" />
            <p className="absolute left-0 top-0 pl-10 pt-11.5 font-montserrat font-bold text-second-text text-[14px]" >{e.overline}</p>
            <h3 className="absolute left-0 top-0 pl-10 pt-21.5 font-montserrat text-text text-[24px] font-bold max-w-28.75 ">{e.title}</h3>
            <p className="absolute left-0 top-0 pl-10 pt-42.25 font-normal font-montserrat text-text text-[12px] ">{e.subtitle}</p>
        </div>
    ))}
  </section>
)
}

export default Highlights;
