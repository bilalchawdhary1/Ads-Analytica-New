import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatBenefits({title , data , subtitle, greenpara}) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
 
  return (
    <>
     <div className="fb-services-section">
          <h1 className="btitle" data-aos="fade-up">
           {title}
          </h1>
          <h6 className="para" data-aos="fade-down">
          {subtitle}
          </h6>
          <h4 className="green-box gd-green"> 
            {greenpara}
          </h4>
          
          <div className="list-conatiner row">
            {data.map((item, i) => (
              <div
                className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp center"
                key={i}
                 data-aos={i % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-delay="300"
              >
                <div className="fb-inner-box" id="inner-box">
                  <h6 className="list-title" id="list-title">
                    <a href="/page-service-details">{item.title}</a>
                  </h6>
                  <img
                    src={`images/icons/${item.img}`}
                    alt={`${item.title}'s Testimonial`}
                    className="icon-img"
                  />
                  <div className="text">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
