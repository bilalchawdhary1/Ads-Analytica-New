import React, { useEffect } from 'react'
import TestimonialSliderTwo from '@/components/slider/TestimonialSliderTwo'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home1_Section6() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);
  return (
    <>
      <section className="testimonial-section">
        <div className="bg" style={{ backgroundImage: 'url(./images/background/teem.png)' }} />
        <div className="auto-container">
          <div className="testimonials" data-aos="fade-left">
            <TestimonialSliderTwo/>
          </div>
        </div>
      </section>
    </>
  )
}
