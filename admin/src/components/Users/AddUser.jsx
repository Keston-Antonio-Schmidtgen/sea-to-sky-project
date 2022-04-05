import React from "react";

export default function AddUser({ toggleClass }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "pink",
      }}
      className={toggleClass}
    >
      Add user here
    </div>
  );
}
