import React from "react";
import PageContent from "../../layout/PageContent";

function ContactOffer({ contactContent, isLoading }) {
  if (isLoading) return null;
  const offer = contactContent.offer;

  return (
    <PageContent className="flex flex-col gap-7.5 md:gap-4 items-center py-20">
        <h5 className="font-bold text-text text-[16px] ">
            {offer.subtitle}
        </h5>
        <h1 className="font-bold text-text text-[58px] ">
            {offer.title}
        </h1>
        <button className="font-bold text-light-text text-[14px] px-10 py-3.75 bg-primary rounded-[5px]">{offer.button}</button>
    </PageContent>
  )
}

export default ContactOffer;
