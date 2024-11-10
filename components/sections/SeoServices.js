import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesHeader from "./ServicesComponents/ServicesHeader";
import WhatBenefits from "./ServicesComponents/WhatBenefits";
import OurServices from "./ServicesComponents/OurServices";
import SuccessStories from "./ServicesComponents/SuccessStories";
// import TimelineSection from "./ServicesComponents/NewCard";
import OurWorking from "./ServicesComponents/OurWorking";
import FAQSection from "./ServicesComponents/FAQSection";
import {
  infoBoxesData,
  data,
  OurServicesdata,
  caseStudies,
  timelineData,
  faqs,
} from "../Seo.json";
import Testimonials from "./ServicesComponents/Testimonials";
import TimelineCards from "./ServicesComponents/TimelineCards";
export default function SeoServices() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <section className="facebook-section">
        <ServicesHeader
          news=" Breaking News: The Top Choice for Proven Facebook Marketing Solutions..."
          title="Unlock the power of a proven SEO method that guarantees top Google rankings in just 90 days!"
          subtitle={
            <>
              Achieve Rapid Results with Our Proven SEO Strategy for Dominating
              Search Rankings!
              <br />
            </>
          }
          description="Harness the power of our proven SEO method designed to achieve top Google rankings in just 90 days! Our expert strategy combines cutting-edge techniques with industry best practices to deliver rapid results and ensure your website stands out in search engine results. From meticulous keyword research and on-page optimization to authoritative link building and technical enhancements, we cover all aspects to boost your visibility and drive substantial traffic. Experience unparalleled growth and dominate search rankings with our tailored SEO approach. "
          button="Get Started with Ads Analytica"
        />
        <WhatBenefits
          title={
            <>
              How Can SEO Drive Growth and <br /> Success for Your Business?
            </>
          }
          subtitle={
            <>
              SEO is a powerful tool that can transform your business by driving
              organic traffic , increasing visibility , and boosting
              credibility. By optimizing your website for search engines, you
              can attract more qualified leads, outshine competitors, and
              build a lasting online presence. Effective SEO not only
              improves your rankings but also enhances user experience,
              leading to higher conversion rates and business growth. In today’s
              digital landscape, investing in SEO is essential for long-term
              success.
            </>
          }
          data={data}
          greenpara="Here are the key benefits of SEO for your business: "
        />
        <OurServices
          title={
            <>
              Unlock the Full Potential of Your Business <br /> with Our Expert
              SEO Services!
            </>
          }
          subtitle="Ready to elevate your business to new heights? Our expert SEO services are designed to unlock your website's full potential and drive significant growth. From in-depth keyword research and on-page optimization to high-quality backlink building and performance tracking , we cover all aspects of SEO to enhance your online presence. Our tailored strategies ensure that your business not only ranks higher on search engines but also attracts more qualified leads and converts them into loyal customers. Experience the power of expert SEO and watch your business thrive! "
          data={OurServicesdata}
        />
        <SuccessStories
          subtitle={
            <>
            See how our innovative strategies and expert execution have achieved remarkable results. Discover how we overcome challenges and turn goals into tangible business success.
            </>
          }
          caseStudies={caseStudies}
        />
        <Testimonials />
        <TimelineCards
          title="Our SEO Roadmap"
          subtitle={
            <>
              Elevate your business with our proven SEO roadmap. We start with a
              thorough website audit, including <br /> Technical SEO for page speed and
              mobile-friendliness, On-Page SEO for optimizing   titles and 
              keywords, <br /> a Content Audit to enhance relevance, and a Backlink
              Audit to manage link quality.  Our comprehensive <br />  approach ensures
              your SEO is finely tuned for long-term growth and success. 
            </>
          }
          timelineData={timelineData}
          button="Get a Free Consultation"
        />
        <OurWorking
          title="Why Choose Our Facebook Ads Services?"
          infoBoxes={infoBoxesData}
        />
        <FAQSection faqs={faqs} />
      </section>
    </>
  );
}
