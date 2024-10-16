import React, { useState } from "react";
// import './FAQSection.css'; // You'll add styles here

export default function FAQSection({faqs}) {
 

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p>
          Do you have a question about OptinMonster? See the list below for our
          most frequently asked questions. If your question is not listed here,
          then please <a href="/page-contact">contact us</a>.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleToggle(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? ">" : ">"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
