import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OurWorking({ title, infoBoxes }) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      {/* About Section Two */}
      <section className="about-section-two pt-0 ">
        <div className="auto-container">
          <div className="bg-gray" />
          <div className="row">
            {/* Image Column */}
            <div
              className="image-column col-lg-6 col-md-12 order-2 "
              data-aos="fade-left"
            >
              <div className="image-box wow fadeInLeft">
                <figure className="image overlay-anim wow fadeInUp">
                  <img src="images/resource/choose-us.jpeg" alt="about-image" />
                </figure>
              </div>
            </div>
            {/* Content Column */}
            <div
              className="content-column col-lg-6 col-md-12 order-1 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column" data-aos="fade-right">
                <div className="sec-title light">
                  <h2>{title}</h2>
                </div>
                {infoBoxes.map((box, index) => (
                  <div className="info-box" key={index}>
                    <div className="inner">
                      <img src={box.icon} className="icon" id="services-icon-img" alt="icon" />
                      <div className="">
                        <span>{box.title}</span> {box.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section Two */}
    </>
  );
}
