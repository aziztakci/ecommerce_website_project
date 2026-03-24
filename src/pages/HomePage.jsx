import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useSelector } from "react-redux";
import SliderCaroussel from "../components/SliderCaroussel";
import Highlights from "../components/Highlights.jsx";
import FeaturedProducts from "../components/FeaturedProducts";

function HomePage() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const featuredData1 = allData[lang].featuredProducts1;
  const featuredData2 = allData[lang].featuredProducts2;
  

  return (
    <div>
      <SliderCaroussel />
      <Highlights />
      <FeaturedProducts data ={featuredData1} reverse={false}/>
      <FeaturedProducts data ={featuredData2} reverse={true}/>
    </div>
  );
}

export default HomePage;
