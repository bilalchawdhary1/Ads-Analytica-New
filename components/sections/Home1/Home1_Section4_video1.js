import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home1_Section4() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Video Section */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="UKgh5psujnE"
        onClose={() => setOpen(false)}
      />
      <section className="video-section" data-aos="fade-up">
        <div className="auto-container">
          <div className="video-box">
            <div className="bg">
              <div
                className="bg bg-image"
                style={{ backgroundImage: "url(./images/background/teem.png)" }}
              />
              <div className="overlay" />
            </div>
            <div className="content">
              <div className="btn-box">
                <button className="play-now" onClick={() => setOpen(true)} aria-label="Play Video">
                  <i className="icon fa fa-play" aria-hidden="true" />
                  <span className="ripple" />
                </button>
              </div>
              <h2 className="title">Most Trusted Agency</h2>
            </div>
          </div>
        </div>
      </section>
      {/*End Video Section */}
    </>
  );
}
