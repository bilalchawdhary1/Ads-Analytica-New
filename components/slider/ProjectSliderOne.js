import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
SwiperCore.use([Autoplay, Navigation]);
const ProjectSliderOne = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const data = [
        {
            img: "project-1.jpg",
            title: "Marketing webdesign"
        },
        {
            img: "project-2.jpg",
            title: "Marketing webdesign"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign"
        },
        {
            img: "project-5.jpg",
            title: "Marketing webdesign"
        },
        {
            img: "project-6.jpg",
            title: "Marketing webdesign"
        },
        {
            img: "project-7.jpg",
            title: "Marketing webdesign"
        },
        {
            img: "project-8.jpg",
            title: "Marketing webdesign"
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
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
                data-aos="fade-up"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="project-block" key={i}>
                        <div className="project-block">
                            <div className="image-box">
                                <figure className="image"><a href="images/resource/project-1.jpg" className="lightbox-image"><img src={`images/resource/${item.img}`} alt /></a> </figure>
                                <div className="caption-box">
                                    <h4 className="title"><a href="page-project-details">{item.title}</a></h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default ProjectSliderOne;