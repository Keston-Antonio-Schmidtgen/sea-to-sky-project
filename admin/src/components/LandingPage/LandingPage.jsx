import React from "react";
import Navigation from "../Navigation/Navigation";

import "./landingPage.scss";
import Footer from "./LandingPageComponents/Footer";
import Carousel from "./LandingPageComponents/BlogThemes";
import About from "./LandingPageComponents/About";
import BlogThemes from "./LandingPageComponents/Contacts";
import Features from "./LandingPageComponents/Features";

export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      {/* <h1>Landing page</h1> */}
      {<Navigation />}
      <Features />
      <Carousel />
      <Footer />

      {/* <button>Explore (goes down and explores)</button> */}
      {/* <Link to="/register">Get Started</Link> */}
    </div>
  );
}
