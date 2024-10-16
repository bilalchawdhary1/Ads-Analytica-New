import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Navigation]);

const TestimonialSliderTwo = () => {
    const data = [
        {
            img: "testi-thumb-2.jpg",
            title: "Jame Sickres",
            desig: "Founder",
            text: "This agency provided exceptional service and helped our business grow tremendously. Their professionalism and attention to detail are unmatched.",
        },
        {
            img: "testi-thumb-1.jpg",
            title: "Aleesha Brown",
            desig: "Co-Founder",
            text: "Working with this team has been a game-changer. Their expertise in digital marketing has significantly boosted our online presence.",
        },
        {
            img: "testi-thumb-3.jpg",
            title: "Mike Hardon",
            desig: "Market Manager",
            text: "Their strategic approach to marketing has brought us great results. I highly recommend their services to anyone looking to expand their business.",
        },
        {
            img: "testi-thumb-1.jpg",
            title: "Aleesha Brown",
            desig: "Co-Founder",
            text: "The creativity and dedication of this team are truly impressive. We’ve seen a substantial increase in our market reach since partnering with them.",
        },
    ];
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
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
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    1350: {
                        slidesPerView: 2,
                    },
                }}
                className="testimonial-carousel-two"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block-two" key={i}>
                        <div className="testimonial-block-two">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="thumb">
                                        <img
                                            src={`images/resource/${item.img}`}
                                            alt={`${item.title}'s Testimonial`}
                                        />
                                    </div>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="text">{item.text}</div>
                                </div>
                                <div className="info-box">
                                    <h6 className="name">{item.title}</h6>
                                    <span className="designation">{item.desig}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default TestimonialSliderTwo;
