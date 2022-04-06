import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
export default function Pages() {
  const { id } = useParams();
  const [pageContent, setPageContent] = useState();

  useEffect(() => {

    const getData = async () => {
      console.log("get data here");
      try {
        const response = await axios.get(`/pages/single/${id}`);

        console.log("response is", response);

        if (response.data.success) setPageContent({ ...response.data.pages });
      } catch (error) {
        console.log(error);
      }
    };

    getData();


  }, []);

  console.log("REsponsed data are:", pageContent);

  return (
    <div>
      <h1>Page Name is: {id}</h1>
      <Link to='/'>Back to home</Link>
    </div>
  );
}
