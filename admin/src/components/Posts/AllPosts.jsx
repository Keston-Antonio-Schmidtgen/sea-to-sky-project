import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function AllPosts({ toggleClass }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/posts/list");

      console.log("category response is", response);

      setPosts([...response.data]);
    };

    getData();
  }, [toggleClass]);

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "blue",
      }}
      className={`${toggleClass}`}
    >
      {posts?.map((item) => (
        <div style={{ display: "flex", border: "1px solid black" }}>
          <div>title:{item.title}</div>

          <div>subtitle:{item.subtitle}</div>

          <div>text:{parse(item.body)}</div>
        </div>
      ))}
    </div>
  );
}
