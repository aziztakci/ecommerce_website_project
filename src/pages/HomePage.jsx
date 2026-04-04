import React from "react";
import SliderCaroussel from "../components/homePage/SliderCaroussel";
import Highlights from "../components/homePage/Highlights.jsx";
import FeaturedProducts from "../components/homePage/FeaturedProducts.jsx";
import MostPopular from "../components/homePage/MostPopular.jsx";
import InfoStrip from "../components/homePage/InfoStrip.jsx";
import Bestseller from "../components/homePage/Bestseller.jsx";
import BrandLogos from "../components/homePage/BrandLogos.jsx";
import FeaturedPosts from "../components/homePage/FeaturedPosts.jsx";
import { useHomeData } from "../hooks/useHomeData.js";

function HomePage() {
  const { data: homeContent, isLoading, error } = useHomeData();
  if (isLoading) return <div className="py-20 text-center text-2xl text-primary font-bold">Yükleniyor...</div>;
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <div>
      <SliderCaroussel />
      <Highlights />
      <FeaturedProducts data={homeContent.featuredProducts1} reverse={false} />
      <MostPopular data={homeContent.mostPopular1} reverse={false} showView={false} />
      <InfoStrip />
      <FeaturedProducts data={homeContent.featuredProducts2} reverse={true} />
      <MostPopular data={homeContent.mostPopular2} reverse={true} showView={true} />
      <Bestseller data={homeContent} isLoading={isLoading}/>
      <BrandLogos />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;


