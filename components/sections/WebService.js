import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesHeader from "./ServicesComponents/ServicesHeader";
import WhatBenefits from "./ServicesComponents/WhatBenefits";
import OurServices from "./ServicesComponents/OurServices";
import OurWorking from "./ServicesComponents/OurWorking";
import FAQSection from "./ServicesComponents/FAQSection";
import {
  infoBoxesData,
  data,
  OurServicesdata,
  concepts,
  DetailsImg,
  faqs,
} from "../WebPage.json";
import Testimonials from "./ServicesComponents/Testimonials";
import ServiceDetails from "./ServicesComponents/ServiceDetail";
import ClientSliderTwo from "../slider/ClientSliderTwo";
import TimelineSection from "./ServicesComponents/NewCard";
export default function WebServices() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <section className="web-section">
        <ServicesHeader
          news=" Breaking News: The Top Choice for Pro Solutions..."
          title="Elevate Your Digital Presence with Expert Website Development"
          subtitle="Crafting tailored solutions with WordPress Shopify, Wix, HTML, and React"
          description="In today's digital world, your website is the face of your brand. At Ads Analytica, we craft custom websites that engage your audience and boost your business. Whether you need a Shopify e-commerce site, a WordPress site, a sleek Wix design, or a custom HTML/React solution, our expert developers deliver responsive, user-friendly, and SEO-optimized websites that excel on all devices. Elevate your online presence with our tailored website development services."
          button="Get Started with Ads Analytica"
        />
        <WhatBenefits
          title={
            <>
              How can web development  <br /> transform your business? 
            </>
          }
          subtitle={
            <>
            Investing in web development is a game-changer! A professionally designed website boosts your brand's credibility, drives traffic, and turns visitors into loyal customers. With mobile responsiveness, speed, and a great user experience, your business stands out. Plus, advanced features like e-commerce, SEO, and analytics help you track performance and increase revenue.
            </>
          }
          greenpara="Here are the key benefits of web development for business owners"
          data={data}
        />
        <OurServices
          title={
            <>
              Choose the Perfect Website Solution
              <br /> for Your Business
            </>
          }
          subtitle="Need a powerful e-commerce site, a content-rich blog, or a sleek portfolio? Ads Analytica offers custom solutions on WordPress, Shopify, Wix, HTML, and React. We ensure your website is visually stunning, performance-optimized, and SEO-friendly to elevate your brand and achieve your goals."
          data={OurServicesdata}
          web="webimg"
        />
        <ServiceDetails
          title="Discover the Websites We've Crafted That Drive Exceptional Results"
          DetailsImg={DetailsImg}
        />
        <ClientSliderTwo slide="slide-img" />
        <Testimonials />
        <TimelineSection
           title="Our Web Development Process"
           subtitle={
             <>
               Our web development process starts with a detailed consultation to
               understand your needs. <br /> We then research, plan, and design
               your site, followed by development and thorough testing. <br />
               After launch, we offer ongoing support to ensure your website
               performs flawlessly.
               <br /> Each step is tailored to deliver a high-quality result that
               meets your business goals.
             </>
           }
           timelineData={concepts}
           button="Get a Free Consultation"
           />
        <OurWorking
          title="Why Choose Our web development Services?"
          infoBoxes={infoBoxesData}
        />
        <FAQSection faqs={faqs} />
      </section>
    </>
  );
}
