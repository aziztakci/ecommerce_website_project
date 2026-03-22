import React, { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";
import { useSelector } from "react-redux";
import SliderCaroussel from "../components/SliderCaroussel";

function HomePage() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  

  return (
    <div>
      <SliderCaroussel />
    </div>
  );
}

export default HomePage;
