import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home1_Section5() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
    const data = [
        {
          title: <>{`Professional`} <br />{`staff`}</>,
          icon:"icon flaticon-team"
        },
        {
          title: <>{`We satisfy `} <br />{`you 100%`}</>,
          icon:"icon flaticon-customer-satisfaction"
        },
        {
          title: <>{`high quality `} <br />{`designing`}</>,
          icon:"icon flaticon-design-thinking"
        }
      ];



    return (
        <>
            {/* Features Section Two */}
            <section className="features-section-two pull-up">
                <div className="auto-container">
                    <div className="row" data-aos="fade-right">
                        {/* Features Block */}
                        {data.map((item, i) => (
                            <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" key={i}>
                                <div className="inner-box">
                                    <div className="content">
                                        <h6 className="title"><a href="page-service-details">{item.title}</a></h6>
                                        <i className={item.icon} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bottom-box">Digital Agency services built specifically for your business. <a href="page-services" className="theme-btn btn-style-one light-bg small">Find Your Solution</a></div>
                </div>
            </section>
            {/* End Services Section Two */}
        </>
    )
}
