import React from "react";
import { useHomeData } from "../../hooks/useHomeData";

function InfoStrip() {
  
const { data: homeContent, isLoading } = useHomeData();
if (isLoading) return null;
const infoContent = homeContent.infoStrip;

  return (
    <section className="flex flex-col justify-center items-center md:flex-row md:flex-wrap min-h-27.75  md:min-h-0 pb-12">
        {infoContent.map((e)=>(
            <div key={e.id} className="flex flex-row  max-w-87.25 md:max-w-66.25 md:max-h-27.75">
                <h2 className="text-danger-text font-montserrat font-bold text-[40px] pt-4.5">{e.number}</h2>
                <div className="flex flex-col justify-center pl-5 gap-1.25  pr-10">
                    <h6 className="font-montserrat font-bold text-[14px] text-text pt-6.25">{e.title}</h6>
                    <span className="font-montserrat font-normal text-second-text text-[12px] pb-6.25">{e.description}</span>
                </div>

            </div>
        ))}
    </section>
  );
}

export default InfoStrip;
