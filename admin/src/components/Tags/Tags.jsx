import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { MDBDatatable } from "mdb-react-ui-kit";
import "./tags.scss";

export default function Tags({ toggleClass }) {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [basicData, setBasicData] = useState({
    columns: ["Title", "Tags", "Published", "Date"],
    rows: [],
    /*  posts.map((post) => [post.title, post.tags, post.published, post.date]), */
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/posts/list");

      console.log("tag response is", response);

      setPosts([...response.data]);
      console.log("posts are", posts);
      let set = new Set();

      posts?.map((item) => {
        item?.tags?.map((tag) => {
          set.add(tag);
        });
      });
      setTags([...set]);

      /*   posts.map((post) => [
        post.title,
        post.tags ? post.tags.join(", ") : "",
        post.published.toString(),
        post.date,
      ]); */

      console.log("hello");
    };

    getData();
    const allRows = [];

    posts?.map((item, idx) => {
      console.log("item is", Object.values(item));
      let array = [];
      array.push(item.title);
      array.push(item.tags ? item.tags.join(", ") : "");
      array.push(item.published.toString());
      array.push(item.date);
      allRows[idx] = [...array];
    });

    setBasicData({ ...basicData, rows: [...allRows] });
  }, [toggleClass]);

  return (
    <div className={toggleClass}>
      All tags from all posts are:{" "}
      <div className="tagContainer">
        {tags?.map((item) => (
          <div className="singleTag">{item}</div>
        ))}
      </div>{" "}
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
