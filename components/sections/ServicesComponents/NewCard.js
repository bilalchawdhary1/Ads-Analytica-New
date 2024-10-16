import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TimelineSection = ({ title, subtitle, timelineData, button }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="timeline-container">
      <h2 className="hadline">{title}</h2>
      <p className="sub-line">{subtitle}</p>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay="300"
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h6>{item.subtitle}</h6>
              <p>{item.text}</p>
            </div>
            <div className="timeline-icon icon">
              <i className={`fa fa-${item.icon}`} />
            </div>
          </div>
        ))}
        <div className="timeline-circle-bottom"></div>
      </div>
      <div className="footer-text">
        {" "}
        <h3 className="blue">Ready to Take Your Business to the Next Level?</h3>
        <p>
          Encourage potential clients to get in touch for a free consultation or
          more information
        </p>
        <div className="bottom-box" data-aos="fade-up">
          <a class="btn btn-doublelayer btn-green" href="/page-contact">
            <span class="btn-doublelayer__maintext">{button}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
