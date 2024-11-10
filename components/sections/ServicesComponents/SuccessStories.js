
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SuccessStories({ subtitle, caseStudies }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <div className="auto-container fd-container">
        <div className="services-container">
          <div className="tp-caption tp-heading facebook-header">
            <h1 data-aos="fade-left">Proven Success Stories</h1>
          </div>
          <h6 className="fb-para para" data-aos="fade-right">
             {subtitle}
          </h6>
          {caseStudies.map((caseStudy, index) => (
            <div key={index}>
              <h3 className="sub-title">
              Client Background : <span>{caseStudy.caseTitle}</span>
              </h3>
              <h4 className="gd-green">{caseStudy.greenPara}</h4>
              <p data-aos="fade-left">
                <strong>Strategy : </strong> {caseStudy.strategy}
              </p>
              <img src={caseStudy.image} alt={caseStudy.caseTitle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
