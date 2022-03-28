import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Home() {
  return (
    <div>
      <h1>Landing page</h1>
      <Navigation />
      <button>Explore (goes down and explores)</button>
      <NavLink to="/register">Get Started</NavLink>
    </div>
  );
}
