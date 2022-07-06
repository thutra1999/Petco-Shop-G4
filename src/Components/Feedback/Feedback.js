import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Feedback.css";
import fb01 from "../../img/feedback01.jpg"
import fb02 from "../../img/feedback02.jpg"
import fb03 from "../../img/feedback03.jpg"
import fb04 from "../../img/feedback04.jpg"
import fb05 from "../../img/feedback05.jpg"
import fb06 from "../../img/feedback06.jpg"
import fb07 from "../../img/feedback07.jpg"
import fb08 from "../../img/feedback08.jpg"

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

function Feedback() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={fb01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb03} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb04} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb05} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb06} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb07} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb08} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Feedback
