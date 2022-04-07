import { useState, useEffect } from "react";
import axios from "axios";
import { MDBDatatable } from "mdb-react-ui-kit";
import "./category.scss";

export default function Category({ toggleClass }) {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [basicData, setBasicData] = useState({
    columns: ["Title", "Category", "Published", "Date"],
    rows: [],
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/posts/list");

      console.log("category response is", response);

      setPosts([...response.data]);
      console.log("posts are", posts);
      let set = new Set();

      posts?.map((item) => {
        item?.categories?.map((category) => {
          set.add(category);
        });
      });
      setCategory([...set]);
    };

    getData();
    const allRows = [];

    posts?.map((item, idx) => {
      console.log("item is", Object.values(item));
      let array = [];
      array.push(item.title);
      array.push(item.categories ? item.categories.join(", ") : "");
      array.push(item.published.toString());
      array.push(item.date);
      allRows[idx] = [...array];
    });

    setBasicData({ ...basicData, rows: [...allRows] });
  }, [toggleClass]);

  return (
    <div className={toggleClass}>
      All category from all posts are:{" "}
      <div className="categoryContainer">
        {category?.map((item) => (
          <div className="singleCategory">{item}</div>
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
