import React from "react";
import PageContent from "../../layout/PageContent";

function ContactMain({ contactContent, isLoading }) {
  if (isLoading) return null;
  const main = contactContent.main;
  return (
    <section className="max-w-full mx-auto bg-light-gray-1 md:bg-light-background ">
      <PageContent className="flex flex-col">
        <div className="toptextcontainer flex flex-col mx-auto items-center text-center max-w-[300px] md:max-w-[625px] pt-[112px] pb-[80px]">
            <h6 className="font-bold text-text text-[14px] ">{main.subtitle}</h6>
            <h2 className="font-bold text-text text-[40px] pt-2.5 px-0 md:px-[35px] whitespace-pre-line">{main.title}</h2>
        </div>  
        <div className="maincardcontainer flex flex-col md:flex-row md:flex-wrap items-center justify-center mb-[80px]">
            {main.cards.map((e)=>(
                <div key={e.id} className={`flex flex-col  w-[330px] items-center gap-1 ${e === main.cards[1] ? "bg-dark-background pt-[85px] pb-[80px]": "bg-white pt-[50px] pb-[50px]"}`}>
                    <img src={e.image} alt="cta_image"/>
                    <h6 className={`font-bold text-[14px] ${e === main.cards[1] ? "text-light-text pt-[25px]": "text-text pt-[40px]"}`}>{e.mail1}</h6>
                    <h6 className={`font-bold text-[14px] ${e === main.cards[1] ? "text-light-text": "text-text"}`}>{e.mail2}</h6>
                    <h5 className={`font-bold text-[16px] pt-2.5  pb-[15px] ${e === main.cards[1] ? "text-light-text": "text-text"}`}>{e.text}</h5>
                    <button className="font-bold text-primary text-[14px] px-[36px] py-[15px] border border-primary rounded-[37px]">{e.button}</button>
                </div>
            ))}
        </div>
      </PageContent>
    </section>
  );
}

export default ContactMain;
