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
  faqs
} from "../FaceBook.json";
import Testimonials from "./ServicesComponents/Testimonials";
export default function FacebookServices() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <section className="facebook-section">
        <ServicesHeader
          news=" Breaking News: The Top Choice for Proven Facebook Marketing Solutions..."
          title=" Boost Your Business with Expert Facebook Ads by Ads Analytica"
          subtitle={
            <>
              Drive targeted traffic and increase sales with Ads
              <br />
              Analytica customized Facebook advertising strategies.
            </>
          }
          description="At Ads Analytica, we create powerful Facebook Ads that connect your
            business with the right audience. Our certified experts use
            data-driven strategies to maximize your ROI and ensure impactful
            results. From targeting and creative design to ongoing optimization,
            we handle every aspect to help you achieve your marketing goals
            efficiently and effectively"
          button="Get Started with Ads Analytica"
        />
        <WhatBenefits
          title={
            <>
              What Are The Benefits of <br /> Facebook Advertising?
            </>
          }
          subtitle={
            <>
              {" "}
              Harness the Power of Facebook Advertising to Expand Your Audience,
              Enhance Engagement, <br /> and Drive Tangible Results with
              Advanced Targeting and Data-Driven Insights.
            </>
          }
          data={data}
        />
        <OurServices
          title="Facebook Advertising Services"
          subtitle="Boost Your Business with Our Tailored Facebook Advertising Solutions."
          data={OurServicesdata}
        />
        <SuccessStories
          subtitle={
            <>
              At Ads Analytica, we pride ourselves on delivering exceptional
              results for our clients.
              <br /> Below are a few examples of how our Facebook Ads services
              have driven growth and success across various industries.
            </>
          }
          caseStudies={caseStudies}
        />
        <Testimonials/>
        <ConceptSection title="Our working Process" button="Get a Free Consultation" concepts={concepts} />
        <OurWorking
          title="Why Choose Our Facebook Ads Services?"
          infoBoxes={infoBoxesData}
        />
        <FAQSection faqs={faqs} />
      </section>
    </>
  );
}
