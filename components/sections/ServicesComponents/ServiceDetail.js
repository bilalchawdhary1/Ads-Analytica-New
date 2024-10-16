import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ServiceDetails({ title, DetailsImg }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section className="service-details services-container auto-container">
        <div className="service-details-content">
          <h2 data-aos="fade-up" data-aos-delay="300">
            {title}
          </h2>
        </div>
        <div className="row">
          {DetailsImg.map((item, i) => (
            <div className="service-block col-lg-3 col-md-6 col-sm-12" key={i}>
              <div className="services-box img-hover">
                <a href={item.link}>
                  <img
                    src={`images/resource/${item.img}`}
                    alt={`Websites We've Crafted`}
                    className=""
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
