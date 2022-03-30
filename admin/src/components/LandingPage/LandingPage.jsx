import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import LandingPageCards from "../LandingPageCards/LandingPageCards";
import Carousel from "../Carousel/Carousel";

export default function LandingPage() {
  return (
    <div>
      {/* <h1>Landing page</h1> */}
     { <Navigation />}
     <LandingPageCards />
     <Carousel />
     <Footer />
     
      {/* <button>Explore (goes down and explores)</button> */}
      {/* <Link to="/register">Get Started</Link> */}
    </div>
  );
}
