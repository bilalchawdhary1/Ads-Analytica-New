import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const testimonialsData = [
    {
      rating: "★★★★★",
      text: "Make a bigger impression on social media with our top-notch web development services. Ads Analytica offers strong functionality and excellent design that are specifically crafted to improve your social media marketing approach and successfully engage your audience.",
      author: {
        name: "Rana Sannan Jahangir",
        title: "Managing Director At,",
        title2: "Jahangir Group Of Companies",
        image: "/images/resource/person1.png",
        caseStudyLink: "https://jahangirgroup.pk/",
      },
    },
    {
      rating: "★★★★★",
      text: "I had the pleasure of working with Ahtsham for my real estate business’s digital marketing needs, including social media marketing, paid ads and website designing. Ahtsham is extremely knowledgeable and professional and he delivered outstanding results for my business.",
      author: {
        name: "Usman Khan",
        title: "CEO At Anwar Estate",
        image: "/images/resource/person2.png",
        caseStudyLink: "https://anwarestate.com/",
      },
    },
    {
      rating: "★★★★★",
      text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
      author: {
        name: "Usman Rana",
        title: "Chairman At Mega Dot Pk",
        image: "/images/resource/person3.png",
        caseStudyLink: "https://www.facebook.com/mega.pk/",
      },
    },
  ];

  return (
    <>
      <div className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card" data-aos="fade-left">
            <div className="testimonial-rating">{testimonial.rating}</div>
            <p>{testimonial.text}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.author.image}
                alt={testimonial.author.name}
              />
              <div>
                <strong>{testimonial.author.name}</strong>
                <span>{testimonial.author.title}</span>
                <span>{testimonial.author.title2}</span>
                <a href={testimonial.author.caseStudyLink}>View Case Study</a>
              </div>
            </div>
          </div>
        ))}
        <div className="lead-generation-section">
          <div className="lead-generation-content" data-aos="fade-up">
            <h1>Start Getting More Leads & Sales Today with Ads Analytica!</h1>
            <p>
              Create and launch smart capture forms today in minutes. What are
              you waiting for?
            </p>
            <div className="bottom-box" >
              <a class="btn btn-doublelayer btn-green" href="/page-contact">
                <span class="btn-doublelayer__maintext">
                  Get Ads Analytica Now →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
