import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileMenu from "./MobileMenu";
import LogoWhite from "./../../public/images/Logo-Single.png";
import LogoDark from "./../../public/images/Logo-Single.png";

const Header1 = ({
  handleOpen,
  handleRemove,
  searchToggle,
  handleToggle,
  scroll,
}) => {
  return (
    <>
      <header
        className={`main-header header-style-one ${
          scroll ? "fixed-header" : ""
        } ${searchToggle ? "moblie-search-active" : ""}`}
      >
        <div className="header-lower">
          <div className="container-fluid">
            {/* Main box */}
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/" title="Digima">
                    <Image src={LogoWhite} alt="Digima" />
                  </Link>
                </div>
                <button
                  className="ui-btn ui-btn search-btn"
                  onClick={handleToggle}
                >
                  <span className="icon lnr lnr-icon-search" />
                </button>
              </div>

              {/* Nav Box */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    <li className="current">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="/">Services</Link>
                      <ul>
                        <li>
                          <Link href="/facebook-services">facebook ads</Link>
                        </li>
                        <li>
                          <Link href="/page-service-google">Google Ads</Link>
                        </li>
                        <li>
                          <Link href="/web-development">Web development</Link>
                        </li>
                        <li>
                          <Link href="/seo-services">SEO</Link>
                        </li>
                        <li>
                          <Link href="/page-service-details">
                            Service Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link href="/page-projects">Portfolio</Link>
                      <ul>
                        <li>
                          <Link href="/page-projects">Portfolio Grid</Link>
                        </li>
                        <li>
                          <Link href="/page-project-details">
                            Portfolio Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/page-about">About us</Link>
                    </li>

                    <li>
                      <Link href="/page-contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                {/* Main Menu End */}
              </div>
              <div className="outer-box" id="outer-box-id">
                {/* <a href="tel:+923246441711" className="info-btn">
                                    <i className="icon fa fa-phone" />
                                    <strong className="text">+923246441711</strong>
                                </a> */}

                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
          {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/" title="Digima">
                  <Image src={LogoWhite} alt="Digima" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu />
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <a href="tel:+923246441711">+92 324 6441711</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <a href="mailto:info@adsanalytica.com">
                    info@adsanalytica.com
                  </a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Working Hours</span>
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link href="/">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-pinterest" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="index">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              {/* Logo */}
              <div className="logo">
                <Link href="/" title="Digima">
                  <Image src={LogoDark} alt="Digima" />
                </Link>
              </div>
              {/* Right Col */}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <MobileMenu />
                  </div>
                </nav>
                {/* Main Menu End */}
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header1;
