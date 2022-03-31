import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import LandingPageCards from "./LandingPageCards/LandingPageCards";
import Carousel from "../Carousel/Carousel";

export default function LandingPage() {
  return (
    <div>
      {/* <h1>Landing page</h1> */}
     { <Navigation />}
     <LandingPageCards />
     <h2 class="mt-4 mb-5 text-center">Blog Themes</h2>
     <Carousel />
     <h2 class="mt-4 mb-5 text-center">Pricing</h2>
     <Footer />
     
      {/* <button>Explore (goes down and explores)</button> */}
      {/* <Link to="/register">Get Started</Link> */}
    </div>
  );
}
