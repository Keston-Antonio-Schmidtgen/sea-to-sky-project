import React from "react";

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
    </div>
  );
}
