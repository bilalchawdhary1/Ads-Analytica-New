import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home1_Section3() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <section className="about-section">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight">
                <div className="inner-column" data-aos="fade-up">
                  <div className="sec-title">
                    <span className="sub-title">Welcome to Ads Analytica</span>
                    <h2>
                      About US
                    </h2>
                    <div className="text">
                      Ads Analytica is a dynamic digital marketing company
                      offering a full spectrum of services to help your business
                      thrive in the online world. Our expertise spans web
                      development, where we create visually engaging and
                      user-friendly websites that drive conversions; social
                      media management, which focuses on building and nurturing
                      your brand's presence across various platforms to connect
                      with your audience; and paid media ads, where we craft and
                      optimize targeted campaigns on platforms like Google and
                      Facebook to maximize your return on investment. <br />
                      We also specialize in e-commerce management, ensuring your
                      online store runs smoothly and efficiently, from product
                      listings to order fulfillment. Additionally, our SEO
                      services are designed to boost your website’s visibility
                      on search engines, driving organic traffic and improving
                      your rankings. At Ads Analytica, we are committed to
                      delivering tailored digital solutions that align with your
                      business objectives and set you on the path to success.
                    </div>
                  </div>
                  <div className="skills"></div>
                  <div className="bottom-box">
                    <a
                      href="page-about"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Lerne More</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="image-box">
                    <span className="icon icon-dots-one bounce-x" />
                    <figure
                      className="image-1 overlay-anim wow fadeInUp"
                      data-aos="fade-right"
                    >
                      <img
                        src="images/resource/about-2.png"
                        alt="Team working on a project"
                      />
                    </figure>
                    <figure
                      className="image-2 overlay-anim wow fadeInRight"
                      data-aos="fade-left"
                    >
                    </figure>
                    <span className="icon-box icon-one">
                      <i className="flaticon-innovation" />
                    </span>
                    <span className="icon-box icon-two">
                      <i className="flaticon-rocket" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
