import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            {/* Main Footer */}
            <footer className="main-footer">
                {/* Upper Box */}
                <div className="auto-container">
                    <div className="upper-box">
                        <div className="row" data-aos="fade-up">
                            {/*  */}
                            <div className="contact-info logo-box col-lg-4 col-md-12 wow fadeInUp text-center">
                                <div className="logo"><a href="/"><img src="images/logo-Single.png" alt /></a></div>
                            </div>
                            {/* Contact Info */}
                            <div className="contact-info col-lg-4 col-md-12 wow fadeInRight">
                                <div className="inner-box">
                                    <h4 className="title">Send Email</h4>
                                    <div className="text text1"><a href="mailto:info@adsanalytica.com">info@adsanalytica.com</a></div>
                                </div>
                            </div>
                            {/* Contact Info */}
                            <div className="contact-info col-lg-4 col-md-12 wow fadeInLeft" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <h4 className="title">call now</h4>
                                    <div className="text text1"><a href="tel:+923246441711">+923246441711</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Upper Box */}
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-5 col-lg-12 col-md-12 col-sm-12" data-aos="fade-right">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-6 col-md-6">
                                        <div className="footer-widget about-widget">
                                            <h6 className="widget-title">About</h6>
                                            <div className="text text1">Welcome to our Ads Analytica agency. We specialize in optimizing digital ad campaigns to drive maximum ROI for your business.</div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-6 col-md-6">
                                        <div className="footer-widget">
                                            <h6 className="widget-title">Explore</h6>
                                            <ul className="user-links">
                                                <li><a href="/">Meet Our Team</a></li>
                                                <li><a href="/">What We Do</a></li>
                                                <li><a href="/">Latest News</a></li>
                                                <li><a href="/">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
                                <div className="footer-widget contacts-widget">
                                    <h6 className="widget-title">Contact</h6>
                                    <div className="text text1"></div>
                                    <ul className="social-icon-two">
                                        <li><a href="/"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="/"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="/"><i className="fab fa-pinterest" /></a></li>
                                        <li><a href="/"><i className="fab fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12" data-aos="fade-left">
                                <div className="footer-widget">
                                    <h6 className="widget-title">Newsletter</h6>
                                    <div className="widget-content">
                                        <div className="subscribe-form">
                                            <div className="text text1">Subsrcibe for our upcoming latest articles and news resources</div>
                                            <form method="post" action="/">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" defaultValue placeholder="Email Address" required />
                                                    <button type="button" className="theme-btn"><span className="btn-title"><i className="fa fa-paper-plane" /></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*End Main Footer */}


        </>
    );
};

export default Footer;