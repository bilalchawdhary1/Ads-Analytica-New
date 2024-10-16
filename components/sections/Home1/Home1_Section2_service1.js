import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home1_Section2() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const data = [
    {
      title: (
        <>
          web design and  <br />
          development
        </>
      ),
      icon: "icon fa-sharp fa-light fa-laptop-mobile",
      description:
        "Creating visually stunning and highly functional websites tailored to your business needs.",
    },
    {
      title: (
        <>
          Graphic <br />
          designing
        </>
      ),
      icon: "icon flaticon-graphic-design",
      description:
        "Transform your ideas into visually stunning designs that captivate and communicate effectively.",
    },
    {
      title: (
        <>
          Social Media  <br />
          Management
        </>
      ),
      icon: "icon flaticon-social-media",
      description:
        "Boost your online presence and drive growth with targeted and innovative digital marketing strategies.",
    },
    {
      title: (
        <>
          Paid Media<br />
          Management
        </>
      ),
      icon: "icon fas fa-thumbs-up",
      description:
        "Strategize and manage paid media campaigns to maximize ROI and drive targeted results",
    }, 
     {
      title: (
        <>
          Ecommerce  <br />
          Management
        </>
      ),
      icon: "icon fa-sharp fa-thin fa-dumpster-fire",
      description:
        "Streamline your online store operations with efficient management of products, orders, and customer interactions.",
    },   
    {
      title: (
        <>
      
          Search Engine  <br />
          Optimization (SEO)
        </>
      ),
      icon: "icon fa-thin fa-print-magnifying-glass",
      description:
        "Boost your online visibility and drive organic traffic with expert SEO strategies tailored to your business.",
     
    },   
    {
      title: (
        <>
          Video  <br />
          Editing
        </>
      ),
      icon: "icon fa-solid fa-photo-film",
      description:
        "Craft and enhance videos with professional editing to captivate your audience.",
    },   
    {
      title: (
        <>
            Mobile App  <br />
            Developmen
        </>
      ),
      icon: "icon fas fa-mobile-alt",
      description:
      "Design, develop, and launch user-friendly mobile apps tailored to your business needs.",
    },     
  ];

  return (
    <>
      {/* Services Section */}
      <section className="services-section">
        <div className="bg bg-pattern-1" />
        <div className="auto-container">
          <div className="sec-title light">
            <div className="row">
              <div className="col-lg-7" data-aos="fade-right">
                <span className="sub-title">our services</span>
                <h2>Services we offer</h2>
              </div>
              <div className="col-lg-5" data-aos="fade-left">
                <div className="text">
                  Empowering Your Business with Comprehensive Solutions that
                  Align with Current Trends and Future Needs
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            {data.map((item, i) => (
              <div
                className="service-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                key={i}
              >
                <div className="inner-box">
                  <span className="count">{i + 1}</span>
                  <h6 className="title">
                    <a href="/page-service-details">{item.title}</a>
                  </h6>
                  <i className={item.icon} />
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
