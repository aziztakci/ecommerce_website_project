import React from "react";
import { useLayoutData } from "../hooks/useLayoutData";
import { useNavigate } from "react-router-dom";
import ContactTop from "../components/contactPage/ContactTop";
import { useInnerData } from "../hooks/useInnerData";
import ContactMain from "../components/contactPage/ContactMain";
import ContactOffer from "../components/contactPage/ContactOffer";

function ContactPage() {
 
  const { data, isLoading,error  } = useInnerData();
  if (isLoading) return <div className="py-20 text-center text-2xl text-primary font-bold">Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;
  
  return (
    <>
      <ContactTop contactContent={data.contact} isLoading={isLoading}/>
      <ContactMain contactContent={data.contact} isLoading={isLoading}/>
      <ContactOffer contactContent={data.contact} isLoading={isLoading}/>
    </>
  );
}

export default ContactPage;
