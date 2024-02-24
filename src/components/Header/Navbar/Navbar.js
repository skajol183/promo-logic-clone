"use client";
import React, { useState, useEffect } from "react";
import ExploreTab from "./ExploreTab";
import SolutionsTab from "./SolutionsTab";
import AboutUsTab from "./AboutUsTab";
import InsightsTab from "./InsightsTab";

const Navbar = () => {
  const [activeNavTab, setActiveNavTab] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleTabClick = (tab) => {
    console.log("Clicked tab:", tab);
    setActiveNavTab(tab);
    setShowPopup(true);
  };

  const closePopup = () => {
    setActiveNavTab(null);
    setShowPopup(false);
  };

  useEffect(() => {
    console.log(
      activeNavTab,
      "activeNavTabEffect",
      showPopup,
      "showPopupInnerEffect"
    );
  }, [activeNavTab, showPopup]);

  return (
    <nav
      id="site-navigation"
      className="main-navigation"
      role="navigation"
      aria-label="Top Menu"
    >
      <div className="menu-new-main-nav-container">
        <ul id="top-menu" className="menu">
          <li
            id="menu-item-115467"
            className="menu-item-explore menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-115467"
          >
            <a
              href="#"
              className="nav-link"
              onClick={() => handleTabClick("explore")}
            >
              Explore
            </a>
            {showPopup && activeNavTab === "explore" ? <ExploreTab /> : null}
          </li>
          <li
            id="menu-item-116377"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-116377"
          >
            <a href="/citation-builder/" className="nav-link">
              Citation Builder
            </a>
            <span className="menu-item-description bl-menu-description"></span>
          </li>
          <li
            id="menu-item-115486"
            className="menu-item-solutions menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-115486"
          >
            <a
              href="#"
              className="nav-link"
              onClick={() => handleTabClick("solutions")}
            >
              Solutions
            </a>
            {showPopup && activeNavTab === "solutions" ? (
              <SolutionsTab />
            ) : null}
          </li>
          <li
            id="menu-item-115503"
            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-115503"
          >
            <a href="/pricing/" className="nav-link">
              Pricing
            </a>
            <span className="menu-item-description bl-menu-description"></span>
          </li>
          <li
            id="menu-item-115494"
            className="menu-item-insights menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-115494"
          >
            <a
              href="#"
              className="nav-link"
              onClick={() => handleTabClick("insights")}
            >
              Insights
            </a>
            {showPopup && activeNavTab === "insights" ? <InsightsTab /> : null}
          </li>
          <li
            id="menu-item-115504"
            className="menu-item-about-us menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-115504"
          >
            <a
              href="#"
              className="nav-link"
              onClick={() => handleTabClick("about")}
            >
              About Us
            </a>
            {showPopup && activeNavTab === "about" ? <AboutUsTab /> : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
