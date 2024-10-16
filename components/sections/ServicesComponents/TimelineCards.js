import React from "react";


const TimelineCards = ({title, subtitle, button, timelineData}) => {
  return (
    <div className="timeline-section timeline-container">
       <h2 className="hadline">{title}</h2>
       <p className="sub-line">{subtitle}</p>
      <ul className="timeline-list">
        {timelineData.map((item, index) => (
          <li key={index} style={{ "--accent-color": item.color }}>
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="descr">{item.descr}</div>
          </li>
        ))}
      </ul>
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

export default TimelineCards;
