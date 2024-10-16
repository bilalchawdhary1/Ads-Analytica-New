import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function OurServices({ title, subtitle, data, web }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      {/* Services Section */}
      <section className="services-components">
        <div className="bg-f3f9fd" />
        <div className="auto-container">
          <div className="sec-title light">
            <div className="text">
              <h1 data-aos="fade-up">{title}</h1>
              <h6 className="para" data-aos-delay="300" data-aos="fade-up">
                {subtitle}
              </h6>
            </div>
          </div>
          <div className="row" id={`${web}`}>
            {data.map((item, i) => (
              <div
                className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="300"
              >
                <div className="services-box">
                  <img
                    src={`images/icons/${item.img}`}
                    alt={`${item.title}'s Testimonial`}
                    className="icon-img"
                  />
                  <h6 className="box-title">
                    <a href="/page-service-details">{item.title}</a>
                  </h6>
                  <div className="text">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
}
