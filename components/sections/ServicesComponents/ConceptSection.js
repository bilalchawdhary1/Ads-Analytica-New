import React from "react";

const ConceptSection = ({concepts, button, title, subtitle}) => {
 

  return (
    <section className="services-bg">
      <div className="concept-section  auto-container fd-container services-section">
        <h2 className="hadline" data-aos="fade-up">
          {title}
        </h2>
        <p className="sub-line">{subtitle}</p>
        {concepts.map((concept, index) => (
          <div key={index} className="concept-item">
            <div className="concept-content">
              <div className="concept-number">
                <h1>{index + 1}</h1>
              </div>
              <div className="concept-info">
                <h2 className="sub-title">{concept.title}</h2>
                <p>{concept.text}</p>
              </div>
              <img
                src={`images/icons/${concept.img}`}
                alt={`${concept.title}'s Testimonial`}
                className="icon-img"
              />
            </div>
          </div>
        ))}
        <div className="footer-text">
          {" "}
          <h3 className="blue">
            Ready to Take Your Business to the Next Level?
          </h3>
          <p>
            Encourage potential clients to get in touch for a free consultation
            or more information
          </p>
          <div className="bottom-box" data-aos="fade-up">
            <a class="btn btn-doublelayer btn-green" href="/page-contact">
              <span class="btn-doublelayer__maintext">{button}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
