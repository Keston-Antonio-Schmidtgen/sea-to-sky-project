import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function FetchPost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
           "/posts/list" /* `https://jsonplaceholder.typicode.com/posts?_limit=10` */
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-7">
          </div>
          <div className="col-lg-5"></div>
    <div className="App">
      <h1 >User Blog Posts</h1>
      {loading && <div>This will only take a moment...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, body, title, subtitle, published, tags, categories, image }) => (
            <li key={id}>
              <img src={image} alt="..." width="500"/>
              <h3>{title}</h3>
              <h5>{parse(body)}</h5>
              <h4>{subtitle}</h4>
            </li>
          ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
}
