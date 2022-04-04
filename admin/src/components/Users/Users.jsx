import React from "react";

export default function Users({ toggleClass }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "red",
      }}
      className={toggleClass}
    >
      Users
    </div>
  );
}
