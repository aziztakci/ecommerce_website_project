import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { useSelector } from "react-redux";
import SliderCaroussel from "../components/SliderCaroussel";
import Highlights from "../components/highlights";

function HomePage() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  

  return (
    <div>
      <SliderCaroussel />
      <Highlights />
    </div>
  );
}

export default HomePage;
