import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSliderTwo = () => {

    const data = [
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-5.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign",
            desc: "The Human Rights and Democracy Study Visa Programms"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 90000,
                    disableOnInteraction: false
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
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block-two" key={i}>
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="page-project-details"><img src={`images/resource/${item.img}`} alt /></Link>
                                </figure>
                                <Link href="page-project-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link>
                                <div className="info-box">
                                    <h4 className="title"><Link href="page-project-details">{item.title}</Link></h4>
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="info-box">
                                    <h4 className="title"><Link href="page-project-details">{item.title}</Link></h4>
                                    <div className="text">{item.desc}</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default ProjectSliderTwo;