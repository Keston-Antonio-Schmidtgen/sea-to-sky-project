import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "./LandingPageComponents/Footer";
import About from "./LandingPageComponents/About";
import Features from "./LandingPageComponents/Features";
import Contacts from "./LandingPageComponents/Contacts";
import Pricing from "./LandingPageComponents/Pricing";
/* import Blogs from "./LandingPageComponents/Blogs" */
import Pills from "./LandingPageComponents/Pills";
import Testimonial from "./LandingPageComponents/Testimonial";
import PillContent from "./LandingPageComponents/PillContent";


export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <Navigation />
      <Features />
      {<Pills />}
      <PillContent />
      {/* <Blogs /> */}
      <Testimonial />
      <Pricing />
      <About />
      <Contacts />
      <Footer />

    </div>
  );
}
