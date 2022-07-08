import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Feedback.css";

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
          <img src="../../img/feedback01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/feedback02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/feedback03.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/feedback04.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/feedback05.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/feedback06.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/feedback07.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/feedback08.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Feedback
