import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Navigation]);

export default function ClientSliderOne() {
    return (
        <Swiper
            spaceBetween={70}
            slidesPerView={3}     
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev-style-3",
                nextEl: ".swiper-button-next-style-3",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                575: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                767: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
        >
            <SwiperSlide className="slide-item"> <a href="/"><img src="images/partner/google.png" alt /></a> </SwiperSlide>
            {/* <SwiperSlide className="slide-item"> <a href="/"><img src="images/partner/linkedin.png" alt /></a> </SwiperSlide> */}
            <SwiperSlide className="slide-item"> <a href="/"><img src="images/partner/Meta.svg" alt /></a> </SwiperSlide>
            <SwiperSlide className="slide-item"> <a href="/"><img src="images/partner/microsoft.svg" alt /></a> </SwiperSlide>
            {/* <SwiperSlide className="slide-item"> <a href="/"><img src="images/partner/amazon.png" alt /></a> </SwiperSlide> */}
        </Swiper>
    )
}
