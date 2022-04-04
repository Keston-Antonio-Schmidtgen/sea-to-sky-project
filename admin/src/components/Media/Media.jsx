import React from "react";

export default function tags({ toggleClass }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "pink",
      }}
      className={toggleClass}
    >
      Listed all uploaded Images from cloudinary here
      <button>Upload new Image</button>
    </div>
  );
}
