import React from "react";

export default function AllPosts({ toggleClass }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "blue",
      }}
      className={`${toggleClass}`}
    >
      All posts here
    </div>
  );
}
