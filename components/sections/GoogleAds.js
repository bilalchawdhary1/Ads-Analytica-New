import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesHeader from "./ServicesComponents/ServicesHeader";
import WhatBenefits from "./ServicesComponents/WhatBenefits";
import OurServices from "./ServicesComponents/OurServices";
import SuccessStories from "./ServicesComponents/SuccessStories";
import ConceptSection from "./ServicesComponents/ConceptSection";
import OurWorking from "./ServicesComponents/OurWorking";
import FAQSection from "./ServicesComponents/FAQSection";
import {
  infoBoxesData,
  data,
  OurServicesdata,
  caseStudies,
  concepts,
  faqs,
} from "../GoogleAds.json";
import Testimonials from "./ServicesComponents/Testimonials";
export default function GoogleAds() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <section className="facebook-section">
        <ServicesHeader
          news="Breaking News: The Top Choice for Proven Google Marketing Solutions"
          title="Boost Your Business with Expert Google Ads Management"
          subtitle={
            <>
              Drive targeted traffic and increase sales with Ads
              <br />
              Analytica customized Google advertising strategies.
            </>
          }
          description="At Ads Analytica, we create powerful Google Ads that drive your business to the forefront of search results. Our certified experts utilize data-driven strategies to maximize your ROI and deliver measurable results. From keyword research and ad copywriting to bid management and ongoing optimization, we manage every aspect of your campaigns to ensure you reach your marketing goals efficiently and effectively."
          button="Get Started with Ads Analytica"
        />
        <WhatBenefits
          title={
            <>
             What Are the Benefits of Web Development? <br /> Google Advertising?
            </>
          }
          subtitle={
            <>
              {" "}
              Harness the Power of Google Ads to Expand Your Reach, Boost
              Engagement, <br/> and Drive Tangible Results with Advanced Targeting and
              Data-Driven Insights.
            </>
          }
          data={data}
        />
        <OurServices
          title="Google Advertising Services"
          subtitle="Boost Your Business with Our Tailored Google Advertising Solutions."
          data={OurServicesdata}
        />
        <SuccessStories
          subtitle={
            <>
              At Ads Analytica, we pride ourselves on delivering exceptional
              results for our clients.
              <br /> Below are a few examples of how our Google Ads services
              have driven growth and success across various industries.
            </>
          }
          caseStudies={caseStudies}
        />
        <Testimonials />
        <ConceptSection title="Our working Process" button="Get a Free Consultation" concepts={concepts} />
        <OurWorking
          title="Why Choose Our Google Ads Services?"
          infoBoxes={infoBoxesData}
        />
        <FAQSection faqs={faqs} />
      </section>
    </>
  );
}
