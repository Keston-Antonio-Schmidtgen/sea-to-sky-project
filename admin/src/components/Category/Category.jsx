import React from "react";

export default function Category({ toggleClass }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "red",
      }}
      className={toggleClass}
    >
      Category
    </div>
  );
}
