import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../contexts/GlobalContext";

function InfoStrip() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const infoContent = allData[lang].infoStrip;

  return (
    <section className="flex flex-col justify-center items-center md:flex-row md:flex-wrap min-h-[111px]  md:min-h-0 pb-12">
        {infoContent.map((e)=>(
            <div key={e.id} className="flex flex-row  max-w-[349px] md:max-w-[265px] md:max-h-[111px]">
                <h2 className="text-danger-text font-montserrat font-bold text-[40px] pt-[18px]">{e.number}</h2>
                <div className="flex flex-col justify-center pl-5 gap-1.25  pr-10">
                    <h6 className="font-montserrat font-bold text-[14px] text-text pt-[25px]">{e.title}</h6>
                    <span className="font-montserrat font-normal text-second-text text-[12px] pb-[25px]">{e.description}</span>
                </div>

            </div>
        ))}
    </section>
  );
}

export default InfoStrip;
