import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Carousel from "./LandingPageComponents/Carousel";
import About from "./LandingPageComponents/About";
import Contact from "./LandingPageComponents/Contacts";
import Features from "./LandingPageComponents/Features";

export default function LandingPage() {
  return (
    <div>
      {/* <h1>Landing page</h1> */}
     { <Navigation />}
     <Features/>
     <Carousel />
     <About />
     <Contact />
     <Footer />
     
      {/* <button>Explore (goes down and explores)</button> */}
      {/* <Link to="/register">Get Started</Link> */}
    </div>
  );
}
