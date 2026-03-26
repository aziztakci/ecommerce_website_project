import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { useLayoutData } from "../hooks/useLayoutData";

function Footer() {

const { data: layoutContent, isLoading } = useLayoutData();
if (isLoading) return null;
const footerContent = layoutContent.footer;

  return (
    <footer className="w-full bg-dark-background pt-10">
      <div className="max-w-360 mx-auto pl-[82.5px] pr-[82.5px] lg:pl-49 lg:pr-55">
        <div className="flex flex-col lg:flex lg:flex-row justify-between  items-center gap-10">
          <div>
            <h3 className="self-start  xl:self-auto pt-10 lg:pt-0 text-light-text  xl:px-0 text-[24px] font-montserrat font-bold">
              {footerContent.title}
            </h3>
            <p className="text-light-text pt-2.5 lg:pt-0 xl:px-0 text-[14px] font-montserrat font-normal">
              {footerContent.subtitle}
            </p>
          </div>
          <button className="self-start xl:ml-0 xl:self-auto mt-12.5 mb-22.5 lg:my-0 text-light-text  text-[14px] font-montserrat font-bold cursor-pointer hover:bg-hover  bg-primary px-10 py-3.75 rounded-[5px]">
            {footerContent.button}
          </button>
        </div>

        <div className=" flex flex-col md:flex md:flex-row md:flex-wrap  xl:flex xl:flex-row  mt-10 gap-7.5 md:gap-15">
          {footerContent.sections.map((e) => (
            <div key={e.id} className="flex flex-col min-w-30 gap-2.5">
              <h5 className="text-light-text text-[16px] font-bold font-montserrat mb-2.5">
                {e.title}
              </h5>

              {e.links.map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-light-text text-[14px] font-bold font-montserrat  "
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          <div className="flex flex-col  gap-2.5 min-w-30  mb-12.25">
            <h5 className="text-light-text text-[16px] font-bold font-montserrat mb-2.5">
              {footerContent.getIn.title}
            </h5>
            <h6 className=" flex gap-2.5 text-light-text text-[14px] font-bold font-montserrat">
              <Phone />
              {footerContent.getIn.phone}
            </h6>
            <h6 className="flex gap-2.5 text-light-text text-[14px] font-bold font-montserrat">
              <MapPin />
              {footerContent.getIn.address}
            </h6>
            <h6 className="flex gap-2.5 text-light-text text-[14px] font-bold font-montserrat">
              <Mail />
              {footerContent.getIn.email}
            </h6>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-0 py-6.25">
          <h6 className=" text-light-text text-[14px] font-bold font-montserrat">
            {footerContent.copyright}
          </h6>          
          <div className="flex gap-[21.5px] mr-7">
            {footerContent.images.map((e) => (
              <a key={e.id} href="#">
                <img src={e.img} alt={e.text} />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
