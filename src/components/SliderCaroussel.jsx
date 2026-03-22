import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { GlobalContext } from "../contexts/globalContext";

import groceryImg from "../assets/images/groceriesCarousel.svg";
import groceryImg3 from "../assets/images/groceriesCarousel3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderCaroussel() {
  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const carouselContent = allData[lang].carousel;

  return (
    <div className="w-full h-159.5 md:h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {carouselContent.slides.map((e) => (
          <SwiperSlide key={e.id} className="relative w-full h-full">
            <img
              src={e.image}
              alt={e.alt}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 flex flex-col items-center md:justify-start md:pt-87.5 pt-0 justify-center text-center px-9 gap-6 bg-black/5">
              <h1 className="font-montserrat font-bold text-[40px] md:text-[58px] pb-5 text-light-text uppercase drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
                {e.title}
              </h1>

              <h4 className="font-montserrat font-normal text-[20px] leading-8.75 text-light-text max-w-132.5 min-w-71.75 drop-shadow-[0_4px_3px_rgba(0,0,0,0.8)]">
                {e.subtitle}
              </h4>

              <button className="bg-primary hover:bg-hover transition-colors text-light-text px-10 py-4 rounded-[5px] font-montserrat font-bold text-[24px] drop-shadow-[-8px_5px_4px_rgba(0,0,0,0.4),8px_5px_4px_rgba(0,0,0,0.4)]">
                {e.button}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderCaroussel;
