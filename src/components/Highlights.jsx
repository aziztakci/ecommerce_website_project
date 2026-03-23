import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { useSelector } from "react-redux";

function Highlights() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const highlightContent = allData[lang].highlightSection;

  return (
  <section className="flex flex-col items-center my-20 mx-10 md:flex-row md:flex-wrap lg:flex-nowrap justify-center gap-2.5 md:gap-10.75">
    {highlightContent.items.map((e)=>(
        <div key={e.id} className="w-83.25 h-58 relative overflow-hidden">
            <img  src={e.image} alt={e.alt} className="absolute left-0 top-0 h-full min-w-106.25 max-w-none object-cover object-left" />
            <p className="absolute left-0 top-0 pl-10 pt-11.5 font-montserrat font-bold text-second-text text-[14px]" >{e.overline}</p>
            <h3 className="absolute left-0 top-0 pl-10 pt-[86px] font-montserrat text-text text-[24px] font-bold max-w-[115px] ">{e.title}</h3>
            <p className="absolute left-0 top-0 pl-10 pt-42.25 font-normal font-montserrat text-text text-[12px] ">{e.subtitle}</p>
        </div>
    ))}
  </section>
)
}

export default Highlights;
