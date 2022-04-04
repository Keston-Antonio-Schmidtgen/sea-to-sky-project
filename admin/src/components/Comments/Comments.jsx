import React from "react";

export default function tags({ toggleClass }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "grey",
      }}
      className={toggleClass}
    >
      Comments
    </div>
  );
}
