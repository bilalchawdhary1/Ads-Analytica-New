import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
SwiperCore.use([Autoplay]);
export default function Home1_Section8() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const data = [
        {
            img: "team-1.webp",
            title: "Muhammad Ahtshamul Haq",
            desig: "Digital Marketer",
            fbUrl: "https://www.facebook.com/profile.php?id=100076159238569&sk=about",
            twUrl: "https://www.threads.net/@ahtshamr1?xmt=AQGziCHXy_kisBVXKB3vQ4VZHny6JMtZY_afVif7YrDaVDs",
            ldUrl: "https://www.linkedin.com/in/ranafaizan139/overlay/contact-info/",
            igUrl: "https://www.instagram.com/ahtshamr1/",
        },
        {
            img: "team-2.webp",
            title: "Faizan Rana",
            desig: "Digital Marketing Specialist",
            fbUrl: "https://www.facebook.com/faizanullah164/photos",
            twUrl: "https://twitter.com/RanaFaizanUllah?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
            ldUrl: "https://www.linkedin.com/in/ranafaizan139/overlay/contact-info/",
            igUrl: "https://www.instagram.com/ranafaizanullah?fbclid=IwY2xjawEr2EBleHRuA2FlbQIxMAABHV57gbmHlc1CEnyDewgk0TviKDJisyNSWZHCjsV6HwSwxrkK0sqqnfA8gg_aem_41Sb9j-tittDoe5SG0dT0A",
        },
        {
            img: "team-3.jpeg",
            title: "Usama Zafar",
            desig: "SEO Expert",
            fbUrl: "https://web.facebook.com/officialusamazafar",
            twUrl: "https://twitter.com/usamazafar?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
            ldUrl: "https://www.linkedin.com/in/usamazafarofficial/",
            igUrl: "https://www.instagram.com/officialusamazafar/",
        }, {
            img: "team-4.webp",
            title: "Muhammad Bilal",
            desig: "Full Stack Developer",
            fbUrl: "https://www.facebook.com/bilal.chaudhary.1848816",
            twUrl: "https://twitter.com/chbilal?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
            ldUrl: "https://www.linkedin.com/in/muhammad-bilal-b3539b315/",
            igUrl: "https://www.instagram.com/chbilalc627/",
        }, 
        {
            img: "team-1.webp",
            title: "Muhammad Ahtshamul Haq",
            desig: "Digital Marketer",
            fbUrl: "https://www.facebook.com/profile.php?id=100076159238569&sk=about",
            twUrl: "https://www.threads.net/@ahtshamr1?xmt=AQGziCHXy_kisBVXKB3vQ4VZHny6JMtZY_afVif7YrDaVDs",
            ldUrl: "https://www.linkedin.com/in/ranafaizan139/overlay/contact-info/",
            igUrl: "https://www.instagram.com/ahtshamr1/",
        },
        {
            img: "team-2.webp",
            title: "Faizan Rana",
            desig: "Digital Marketing Specialist",
            fbUrl: "https://www.facebook.com/faizanullah164/photos",
            twUrl: "https://twitter.com/RanaFaizanUllah?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
            ldUrl: "https://www.linkedin.com/in/ranafaizan139/overlay/contact-info/",
            igUrl: "https://www.instagram.com/ranafaizanullah?fbclid=IwY2xjawEr2EBleHRuA2FlbQIxMAABHV57gbmHlc1CEnyDewgk0TviKDJisyNSWZHCjsV6HwSwxrkK0sqqnfA8gg_aem_41Sb9j-tittDoe5SG0dT0A",
        },
        {
            img: "team-3.jpeg",
            title: "Usama Zafar",
            desig: "SEO Expert",
            fbUrl: "https://web.facebook.com/officialusamazafar",
            twUrl: "https://twitter.com/usamazafar?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
            ldUrl: "https://www.linkedin.com/in/usamazafarofficial/",
            igUrl: "https://www.instagram.com/officialusamazafar/",
        }, {
            img: "team-4.webp",
            title: "Muhammad Bilal",
            desig: "Full Stack Developer",
            fbUrl: "https://www.facebook.com/bilal.chaudhary.1848816",
            twUrl: "https://twitter.com/chbilal?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
            ldUrl: "https://www.linkedin.com/in/muhammad-bilal-b3539b315/",
            igUrl: "https://www.instagram.com/chbilalc627/",
        }, 
    ];

    return (
        <>
            {/* Team Section */}
            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title text-center" data-aos="fade-right">
                        <span className="sub-title">our team members</span>
                        <h2>Meet the experts</h2>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {/* Team block */}
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="team-block-two" data-aos="fade-left">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <a href="page-team-details">
                                                    <img src={`images/resource/${item.img}`} alt={item.title} />
                                                </a>
                                            </figure>
                                            <div className="social-links">
                                                <a href={item.twUrl}><i className="fab fa-twitter" /></a>
                                                <a href={item.fbUrl}><i className="fab fa-facebook" /></a>
                                                <a href={item.ldUrl}><i className="fab fa-linkedin" /></a>
                                                <a href={item.igUrl}><i className="fab fa-instagram" /></a>
                                            </div>
                                            <span className="share-icon fa fa-share-alt" />
                                        </div>
                                        <div className="info-box">
                                            <h5 className="name">
                                                <a href="/">{item.title}</a>
                                            </h5>
                                            <span className="designation">{item.desig}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* End Team Section */}
        </>
    );
}

// export default function Home1_Section8() {
//     const data = [
//         {
//             img:"team-1.webp",
//             title: "Muhammad Ahtshamul Haq",
//             desig: "CEO",
//             fbUrl:"https://www.facebook.com/profile.php?id=100076159238569&sk=about",
//             twUrl:"https://www.threads.net/@ahtshamr1?xmt=AQGziCHXy_kisBVXKB3vQ4VZHny6JMtZY_afVif7YrDaVDs",
//             ldUrl:"https://www.linkedin.com/in/ranafaizan139/overlay/contact-info/",
//             igUrl:"https://www.instagram.com/ahtshamr1/",

//         },
//         {
//             img:"team-2.webp",
//             title: "Faizan Rana",
//             desig: "Digital Marketing Specialist",
//             fbUrl:"https://www.facebook.com/faizanullah164/photos",
//             twUrl:"https://twitter.com/RanaFaizanUllah?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
//             ldUrl:"https://www.linkedin.com/in/ranafaizan139/overlay/contact-info/",
//             igUrl:"https://www.instagram.com/ranafaizanullah?fbclid=IwY2xjawEr2EBleHRuA2FlbQIxMAABHV57gbmHlc1CEnyDewgk0TviKDJisyNSWZHCjsV6HwSwxrkK0sqqnfA8gg_aem_41Sb9j-tittDoe5SG0dT0A",
//         },
//         {
//             img:"team-3.jpeg",
//             title: "Usama Zafar",
//             desig: "Experience in SEO",
//             fbUrl:"https://web.facebook.com/officialusamazafar",
//             twUrl:"https://twitter.com/usamazafar?fbclid=IwY2xjawEr2EJleHRuA2FlbQIxMAABHe4qHViD5nsa9HVLVoRVuaU2t92MEqU7Nm0BOuZ5IbsJoILAqBHcMHUuBg_aem_vEpuNR2sJ-pfvaqCrqcqXQ",
//             ldUrl:"https://www.linkedin.com/in/usamazafarofficial/",
//             igUrl:"https://www.instagram.com/officialusamazafar/",

//         }
//     ];


//     return (
//         <>
//             {/* Team Section */}
//             <section className="team-section">
//                 <div className="auto-container">
//                     <div className="sec-title text-center">
//                         <span className="sub-title">our team members</span>
//                         <h2>Meet the experts</h2>
//                     </div>
//                     <div className="row">
//                         {/* Team block */}
//                         {data.map((item, i) => (
//                             <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" key={i}>
//                                 <div className="inner-box">
//                                     <div className="image-box">
//                                         <figure className="image"><a href="page-team-details"><img src={`images/resource/${item.img}`} alt /></a></figure>
//                                         <div className="social-links">
//                                             <a href={item.twUrl}><i className="fab fa-twitter" /></a>
//                                             <a href={item.fbUrl}><i className="fab fa-facebook" /></a>
//                                             <a href={item.ldUrl}><i className="fab fa-linkedin" /></a>
//                                             <a href={item.igUrl}><i className="fab fa-instagram" /></a>
//                                         </div>
//                                         <span className="share-icon fa fa-share-alt" />
//                                     </div>
//                                     <div className="info-box">
//                                         <h5 className="name"><a href="/">{item.title}</a></h5>
//                                         <span className="designation">{item.desig}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             {/* End Team Section */}


//         </>
//     )
// }
