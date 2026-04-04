import React from "react";
import PageContent from "../../layout/PageContent";

function ContactMain({ contactContent, isLoading }) {
  if (isLoading) return null;
  const main = contactContent.main;
  return (
    <section className="max-w-full mx-auto bg-light-gray-1 md:bg-light-background ">
      <PageContent className="flex flex-col">
        <div className="toptextcontainer flex flex-col mx-auto items-center text-center max-w-75 md:max-w-156.25 pt-28 pb-20">
            <h6 className="font-bold text-text text-[14px] ">{main.subtitle}</h6>
            <h2 className="font-bold text-text text-[40px] pt-2.5 px-0 md:px-8.75 whitespace-pre-line">{main.title}</h2>
        </div>  
        <div className="maincardcontainer flex flex-col md:flex-row md:flex-wrap items-center justify-center mb-20">
            {main.cards.map((e)=>(
                <div key={e.id} className={`flex flex-col  w-82.5 items-center gap-1 ${e === main.cards[1] ? "bg-dark-background pt-21.25 pb-20": "bg-white pt-12.5 pb-12.5"}`}>
                    <img src={e.image} alt="cta_image"/>
                    <h6 className={`font-bold text-[14px] ${e === main.cards[1] ? "text-light-text pt-6.25": "text-text pt-10"}`}>{e.mail1}</h6>
                    <h6 className={`font-bold text-[14px] ${e === main.cards[1] ? "text-light-text": "text-text"}`}>{e.mail2}</h6>
                    <h5 className={`font-bold text-[16px] pt-2.5  pb-3.75 ${e === main.cards[1] ? "text-light-text": "text-text"}`}>{e.text}</h5>
                    <button className="font-bold text-primary text-[14px] px-9 py-3.75 border border-primary rounded-[37px]">{e.button}</button>
                </div>
            ))}
        </div>
      </PageContent>
    </section>
  );
}

export default ContactMain;
