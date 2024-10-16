import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderThree = () => {

    const data = [
        {
            img: "testi-thumb-2.jpg",
        },
        {
            img: "testi-thumb-1.jpg",
        },
        {
            img: "testi-thumb-3.jpg",
        },
        {
            img: "testi-thumb-1.jpg",
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    1350: {
                        slidesPerView: 3,
                    },
                }}
                className="testimonial-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block-two" key={i}>
                            <div className="inner-box2">
                                <div className="content-box2">
                                    <div className="thumb"><img src={`images/resource/${item.img}`} alt /></div>
                                </div>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TestimonialSliderThree;