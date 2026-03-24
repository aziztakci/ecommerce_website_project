import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useSelector } from "react-redux";
import SliderCaroussel from "../components/SliderCaroussel";
import Highlights from "../components/Highlights.jsx";
import FeaturedProducts from "../components/FeaturedProducts";
import MostPopular from "../components/MostPopular.jsx";
import InfoStrip from "../components/InfoStrip.jsx";
import Bestseller from "../components/Bestseller.jsx";

function HomePage() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const featuredData1 = allData[lang].featuredProducts1;
  const featuredData2 = allData[lang].featuredProducts2;
  const popularData1 = allData[lang].mostPopular1;
  const popularData2 = allData[lang].mostPopular2;

  return (
    <div>
      <SliderCaroussel />
      <Highlights />
      <FeaturedProducts data={featuredData1} reverse={false} />
      <MostPopular data={popularData1} reverse={false} showView={false} />
      <InfoStrip />
      <FeaturedProducts data={featuredData2} reverse={true} />
      <MostPopular data={popularData2} reverse={true} showView={true} />
      <Bestseller />
    </div>
  );
}

export default HomePage;
