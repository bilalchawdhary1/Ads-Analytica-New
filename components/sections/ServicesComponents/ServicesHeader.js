import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesHeader(props) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div className="services-hader services-bg">
        <div className="services-container auto-container">
          <div className="tp-caption tp-heading facebook-header">
            <div class="col-12 text-center fade-in" data-aos="fade-up">
              <span class="eyebrow__flashing">
                <span class="eyebrow__flashing-dot"></span>
                <span class="d-none d-lg-inline">{props.news}</span>
                <span class="d-inline"></span>
              </span>
            </div>
            <h1 data-aos="fade-left" className="headline">
             {props.title} 
            </h1>
          </div>
          <h2 className="fd-sub-title" data-aos="fade-right">
          {props.subtitle}
          </h2>
          <h6 className="fb-para para" data-aos="fade-up">
          {props.description}
          </h6>
          <div className="bottom-box" data-aos="fade-up">
            <a class="btn btn-doublelayer btn-green" href="/page-contact">
              <span class="btn-doublelayer__maintext">
              {props.button}
              </span>
            </a>
          </div>
          <div className="review" data-aos="fade-down">
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <p>4.8 stars out of 5,847 reviews</p>
          </div>
        </div>
      </div>
    </>
  );
}
