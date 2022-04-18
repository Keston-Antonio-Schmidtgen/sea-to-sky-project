import React from "react";
import {Link} from "react-router-dom";

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
      <Link to="/addPost">add Post</Link></div>
    </div>
  );
}
