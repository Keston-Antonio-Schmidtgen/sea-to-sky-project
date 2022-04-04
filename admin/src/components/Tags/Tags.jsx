import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { MDBDatatable } from "mdb-react-ui-kit";

export default function Tags({ toggleClass }) {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [basicData, setBasicData] = useState({
    columns: ["Title", "Tags", "Published", "Date"],
    rows: [
      /*  posts.map((post) => [post.title, post.tags, post.published, post.date]), */
    ],
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/posts/list");

      console.log("tag response is", response);

      setPosts([...response.data]);

      let set = new Set();

      posts.map((item) => {
        item.tags.map((tag) => {
          set.add(tag);
        });
      });
      setTags([...set]);

      basicData.rows = posts.map((post) => [
        post.title,
        post.tags ? post.tags.join(", ") : "",
        post.published.toString(),
        post.date,
      ]);
    };

    getData();
  }, []);

  console.log("rows are", basicData.rows);
  return (
    <div className={toggleClass}>
      All tags from all posts are:{" "}
      <h1>
        {tags.map((item) => (
          <div>{item}</div>
        ))}
      </h1>{" "}
      <MDBDatatable
        multi
        selectable
        data={basicData}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </div>
  );
}
