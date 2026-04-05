import React from "react";
import { useInnerData } from "../hooks/useInnerData";
import AboutTop from "../components/aboutPage/AboutTop";
import AboutStrip from "../components/aboutPage/AboutStrip";
import AboutInfoStrip from "../components/aboutPage/AboutStripInfo";
import AboutVideoSection from "../components/aboutPage/AboutVideoSection";

function AboutPage() {
  const { data, isLoading, error } = useInnerData();
  if (isLoading)
    return (
      <div className="py-20 text-center text-2xl text-primary font-bold">
        Yükleniyor...
      </div>
    );
    if (error) return <div>Hata: {error.message}</div>;

  return (
    <>
      <AboutTop aboutContent={data.about} isLoading={isLoading}/>
      <AboutStrip aboutContent={data.about} isLoading={isLoading}/>
      <AboutInfoStrip aboutContent={data.about} isLoading={isLoading}/>
      <AboutVideoSection aboutContent={data.about} isLoading={isLoading} />
    </>
  );
}

export default AboutPage;
