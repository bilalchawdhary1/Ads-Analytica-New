import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Typewriter } from "react-simple-typewriter";

// Install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

export default function SliderArea() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="main-slider">
      <div className="fullwidthbanner-container">
        <div className="fullwidthabanner">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={2}
            slidesPerView={1}
            zoom
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".tp-leftarrow",
              nextEl: ".tp-rightarrow",
            }}
            loop={true}
          >
            <SwiperSlide>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100vh",
                  overflow: "hidden",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                    opacity: ".2",

                  }}
                >
                  <source
                    src="/images/background/hero-bg-video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div
                  className="content-wrap"
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                  data-animation="fadeInUp"
                  data-delay="1.5s"
                >
                  <div className="tp-caption tp-heading">
                    <h1>
                      <span>Award Winning</span> <br /> Digital Marketing Agency
                    </h1>
                  </div>
                  <div className="tp-caption">
                    <div className="text">
                      We are passionate about{" "}
                      <Typewriter
                        words={[
                          " Website Development",
                          " Paid Ads",
                          " Social Media",
                          " Ecommerce",
                          " Search Engine Optimization",
                        ]}
                        loop={false}
                        cursor
                        cursorStyle={
                          <span style={{ color: "#ffff" }}>|</span>
                        }
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </div>
                  </div>
                  <div className="tp-caption">
                    <div className="btn-box">
                      <a
                        href="page-contact"
                        className="theme-btn btn-style-one"
                      >
                        <span className="btn-title">get a quote</span>
                      </a>
                      <a
                        href="page-about"
                        className="theme-btn btn-style-one light-bg"
                      >
                        <span className="btn-title">Explore Now</span>
                      </a>
                    </div>
                  </div>
                  <div className="partner" data-aos="fade-up">
                    <div>
                      <img src="images/partner/aplus.svg" alt="logo-1" />
                    </div>
                    <img
                      src="images/partner/amazon-partner.svg"
                      alt="logo-2"
                    />
                    <img
                      src="images/partner/google-partner-2024.svg"
                      alt="logo-3"
                    />
                    <img
                      src="images/partner/meta-business.svg"
                      alt="logo-4"
                    />
                    <img
                      src="images/partner/microsoft-ads-partner-2024.svg"
                      alt="logo-5"
                    />
                    <img src="images/partner/year.svg" alt="logo-6" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <ul className="social-links">
        <li>
          <a href="/">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-pinterest" />
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </section>
  );
}





// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SwiperCore, {
//   Autoplay,
//   Navigation,
//   Pagination,
//   EffectFade,
// } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { Typewriter } from "react-simple-typewriter";
// // install Swiper modules
// SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

// export default function SliderArea() {
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);
//   return (
//     <section className="main-slider">
//       <div className="fullwidthbanner-container">
//         <div className="fullwidthabanner">
//           <Swiper
//             // install Swiper modules
//             style={{
//               "--swiper-navigation-color": "#fff",
//               "--swiper-pagination-color": "#fff",
//             }}
//             spaceBetween={2}
//             slidesPerView={1}
//             zoom
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               prevEl: ".tp-leftarrow",
//               nextEl: ".tp-rightarrow",
//             }}
//             loop={true}
//           >
//             <ul>
//               <SwiperSlide>
//                 <li
//                   data-animation="fadeInUp"
//                   data-delay="0.9s"
//                   style={{
//                     backgroundImage:
//                       "url(" + "images/main-slider/bg-1.jpg" + ")",
//                     backgroundPosition: "center",
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                   }}
//                 >
//                   <div
//                     className="content-wrap"
//                     data-animation="fadeInUp"
//                     data-delay="1.5s"
//                   >
//                     <div className="tp-caption tp-heading">
//                       <h1>
//                         <span>Award Winning</span> <br /> Digital Marketing
//                         Agency
//                       </h1>
//                     </div>
//                     <div className="tp-caption">
//                       <div className="text">
//                         We are passionate about{" "}
//                         <Typewriter
//                           words={[
//                             " Website Development",
//                             " Paid Ads",
//                             " Social Media",
//                             " Ecommerce",
//                             " Search Engine Optimization",
//                           ]}
//                           loop={false}
//                           cursor
//                           cursorStyle={
//                             <span style={{ color: "#ffff" }}>|</span>
//                           }
//                           typeSpeed={70}
//                           deleteSpeed={50}
//                           delaySpeed={1000}
//                         />
//                       </div>
//                     </div>
//                     <div className="tp-caption">
//                       <div className="btn-box">
//                         <a
//                           href="page-contact"
//                           className="theme-btn btn-style-one"
//                         >
//                           <span className="btn-title">get a qoute</span>
//                         </a>
//                         <a
//                           href="page-about"
//                           className="theme-btn btn-style-one light-bg"
//                         >
//                           <span className="btn-title">Explore Now</span>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="partner " data-aos="fade-up">
//                       <div>
//                         <img src="images/partner/aplus.svg" alt="logo-1" />
//                       </div>
//                       <img
//                         src="images/partner/amazon-partner.svg"
//                         alt="logo-2"
//                       />
//                       <img
//                         src="images/partner/google-partner-2024.svg"
//                         alt="logo-3"
//                       />
//                       <img
//                         src="images/partner/meta-business.svg"
//                         alt="logo-4"
//                       />
//                       <img
//                         src="images/partner/microsoft-partner-2024.svg"
//                         alt="logo-5"
//                       />
//                       <img src="images/partner/year.svg" alt="logo-6" />
//                     </div>
//                   </div>
//                 </li>
//               </SwiperSlide>
//             </ul>
//           </Swiper>
//         </div>
//       </div>
//       <ul className="social-links">
//         <li>
//           <a href="/">
//             <i className="fab fa-twitter" />
//           </a>
//         </li>
//         <li>
//           <a href="/">
//             <i className="fab fa-facebook" />
//           </a>
//         </li>
//         <li>
//           <a href="/">
//             <i className="fab fa-pinterest" />
//           </a>
//         </li>
//         <li>
//           <a href="/">
//             <i className="fab fa-instagram" />
//           </a>
//         </li>
//       </ul>
//     </section>
//   );
// }
