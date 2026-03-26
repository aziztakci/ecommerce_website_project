import React from "react";
import SliderCaroussel from "../components/SliderCaroussel";
import Highlights from "../components/Highlights.jsx";
import FeaturedProducts from "../components/FeaturedProducts";
import MostPopular from "../components/MostPopular.jsx";
import InfoStrip from "../components/InfoStrip.jsx";
import Bestseller from "../components/Bestseller.jsx";
import BrandLogos from "../components/BrandLogos.jsx";
import FeaturedPosts from "../components/FeaturedPosts.jsx";
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
      <Bestseller />
      <BrandLogos />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;


