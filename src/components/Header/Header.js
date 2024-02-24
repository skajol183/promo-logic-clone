import React from "react";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header id="page-header">
        <div id="promotion-bar" className="promotion-bar dark">
          <div className="inner">
            <div className="promo-title">
              <div className="promo-icon">
                <div className="sizer"></div>
              </div>
              <div className="promo-text">
                <h3>GOOGLE ANALYTICS 4: ESSENTIALS FOR LOCAL SEO </h3>
                <p>Enroll in BrightLocal Academy's new, free video course </p>
              </div>
            </div>
            <div className="promo-cta">
              <a
                className="button button-small"
                href="https://academy.brightlocal.com/course/google-analytics-essentials-for-local-seo"
                title="START TODAY"
              >
                START TODAY{" "}
              </a>
              <a
                href="#"
                id="promo-bar-close"
                className="button button-sml close"
              >
                Close
              </a>
            </div>
          </div>
        </div>
        <div className="top-bar-nav">
          <div className="nav-container">
            <ul id="menu-pre-nav-menu" className="pre-nav-menu">
              <li
                id="menu-item-115672"
                className="top-nav-item stand-with-ukraine menu-item menu-item-type-custom menu-item-object-custom menu-item-115672"
              >
                <a
                  href="/we-stand-with-ukraine/"
                  className="nav-link"
                >
                  <span className="flag"></span>{" "}
                  <span>We stand with Ukraine</span>
                </a>
                <span className="menu-item-description bl-menu-description"></span>
              </li>
              <li
                id="menu-item-115527"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-115527"
              >
                <a href="https://academy.brightlocal.com" className="nav-link">
                  BrightLocal Academy
                </a>
                <span className="menu-item-description bl-menu-description"></span>
              </li>
              <li
                id="menu-item-115528"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-115528"
              >
                <a
                  href="https://help.brightlocal.com/hc/en-us"
                  className="nav-link"
                >
                  Help Center
                </a>
                <span className="menu-item-description bl-menu-description"></span>
              </li>
              <li
                id="menu-item-115529"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-115529"
              >
                <a href="/contact-support/" className="nav-link">
                  Contact Support
                </a>
                <span className="menu-item-description bl-menu-description"></span>
              </li>
              <li
                id="menu-item-115530"
                className="login menu-item menu-item-type-custom menu-item-object-custom menu-item-115530"
              >
                <a href="https://tools.brightlocal.com/" className="nav-link">
                  Login
                </a>
                <span className="menu-item-description bl-menu-description"></span>
              </li>
            </ul>
          </div>
        </div>
        <div id="nav-container" className="flex">
          <div className="logo">
            <a
              href="/"
              className="custom-logo-link"
              rel="home"
              aria-current="page"
            >
              <img
                width="215"
                height="40"
                src="https://www.brightlocal.com/wp-content/uploads/2023/09/BL-logomark-green.png"
                className="custom-logo"
                alt="Bl Logomark Green"
                decoding="async"
              />
            </a>
          </div>
          <Navbar />
          <div className="main-nav-buttons">
            <ul
              id="nav-buttons-login-menu"
              className="main-nav-buttons-container"
            >
              <li
                id="menu-item-40"
                className="nav-cta-sales menu-item menu-item-type-custom menu-item-object-custom menu-item-40"
              >
                <a
                  href="/book-a-demo/"
                  className="nav-link"
                >
                  Book a demo
                </a>
                <span className="menu-item-description bl-menu-description"></span>
              </li>
              <li
                id="menu-item-41"
                className="nav-cta-trial menu-item menu-item-type-custom menu-item-object-custom menu-item-41"
              >
                <a
                  href="https://tools.brightlocal.com/seo-tools/admin/sign-up/257/"
                  className="nav-link"
                >
                  Try for free
                </a>
                <span className="menu-item-description bl-menu-description"></span>
              </li>
            </ul>
          </div>
          <button
            className="menu-toggle hamburger hamburger--3dy"
            type="button"
            aria-label="menu toggle"
            aria-controls="top-menu"
            aria-expanded="false"
            id="menu-toggle"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
