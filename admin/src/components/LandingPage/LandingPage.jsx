import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "./LandingPageComponents/Footer";
import Carousel from "./LandingPageComponents/BlogThemes";
import About from "./LandingPageComponents/About";
import BlogThemes from "./LandingPageComponents/Contacts";
import Features from "./LandingPageComponents/Features";
import Contacts from "./LandingPageComponents/Contacts";

export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <Navigation />
      <Features />
      <BlogThemes />
      <Carousel />
      <About />
      <Contacts />
      <Footer />

      {/* <button>Explore (goes down and explores)</button> */}
      {/* <Link to="/register">Get Started</Link> */}
    </div>
  );
}
