import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home1_Section9() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      {/* About Section Two */}
      <section className="about-section-two pt-0">
        <div className="auto-container">
          <div className="bg bg-pattern-4" />
          <div className="row">
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 order-2 " data-aos="fade-left">
              <div className="image-box wow fadeInLeft">
                <figure className="image overlay-anim wow fadeInUp">
                  <img src="images/resource/about-3.png" alt />
                </figure>
              </div>
            </div>
            <div
              className="content-column col-lg-6 col-md-12 order-1 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column" data-aos="fade-right">
                <div className="sec-title light">
                  <h2>Our Working Philosophy</h2>
                  <div className="text">
                    Our digital agency is focused on assisting clients in
                    achieving their business objectives by leveraging the power
                    of various digital channels and cutting-edge technologies.
                  </div>
                </div>
                <div className="info-box">
                  <div className="inner">
                    <i className="icon fas fa-1" />
                    <h6 className="sub-title">Who We Are?</h6>
                    <div className="text">
                      We place a premium on delivering measurable results for
                      clients by increasing website traffic, generating leads,
                      and increasing online sales.
                    </div>
                  </div>
                </div>
                <div className="info-box">
                  <div className="inner">
                    <i className="icon fas fa-2" />
                    <h6 className="sub-title">What we believe?</h6>
                    <div className="text">
                      Our digital agency places a strong emphasis on
                      collaborating closely with clients to ensure high-quality
                      ongoing communication.
                    </div>
                  </div>
                </div>
                <div className="info-box">
                  <div className="inner">
                    <i className="icon fas fa-3" />
                    <h6 className="sub-title">What we do?</h6>
                    <div className="text">
                      Ads Analytica ranks top among the professional Marketing
                      companies in the world. We offer a comprehensive suite of
                      services designed to cater.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Emd About Section Two */}
    </>
  );
}
