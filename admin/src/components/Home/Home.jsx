import React from "react";
import {Link} from "react-router-dom";
import "./Home.scss"

export default function Home({ homeStyle, toggleClass }) {
  return (
    <div
      style={{
        display: homeStyle,
        width: "150px",
        height: "150px",
        backgroundColor: "red",
      }}
      className={`${toggleClass}`}
    >
      Hello From home
      <div className="boxes">
      <div><Link to="/allposts">All Posts</Link></div>
      <div><Link to="/allpages">All Posts</Link></div>
      <div><Link to="/media">All Posts</Link></div>
      </div>
    </div>
  );
}
