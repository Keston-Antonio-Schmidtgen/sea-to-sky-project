import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "./LandingPageComponents/Footer";
import About from "./LandingPageComponents/About";
import BlogThemes from "./LandingPageComponents/BlogThemes";
import Features from "./LandingPageComponents/Features";
import Contacts from "./LandingPageComponents/Contacts";
import Pricing from "./LandingPageComponents/Pricing";

export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <Navigation />
      <Features />
      <BlogThemes />
      <Pricing />
      <About />
      <Contacts />
      <Footer />

      {/* <button>Explore (goes down and explores)</button> */}
      {/* <Link to="/register">Get Started</Link> */}
    </div>
  );
}
