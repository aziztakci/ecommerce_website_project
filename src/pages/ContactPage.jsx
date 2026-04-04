import React from "react";
import { useLayoutData } from "../hooks/useLayoutData";

function ContactPage() {
  const { data, isLoading } = useLayoutData();
  if (isLoading) return null;
  const contactContent = data.contact;
  return (
    <section className="relative w-full h-117 md:h-111.5 overflow-hidden flex items-center justify-center">
      <img
        src={contactContent.image}
        alt="contact_img"
        className="absolute inset-0 w-full h-full object-cover object-[65%] md:object-center z-0"
      />

      <div className="relative z-10 flex flex-col items-center max-w-87.5 md:max-w-122 px-15.75 md:px-5 gap-7.5 text-center">
        <h2 className="font-bold text-text text-[40px] leading-tight ">
          {contactContent.text}
        </h2>
        <p className="text-second-text text-[14px] ">
          {contactContent.description}
        </p>
        <button className="text-primary text-[14px] font-bold ">
          {contactContent.cta}
        </button>
      </div>
    </section>
  );
}

export default ContactPage;
