import { React, useState, useContext, useEffect } from "react";
import { WordContext } from "../context";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Media.scss"
export default function Media({ toggleClass }) {
  const [newImage, setNewImage] = useState("");
  const { currentAdmin } = useContext(WordContext);
  const [data, setData] = useState({
    owner: currentAdmin._id,
    image: [],
  });
  const [images, setImages] = useState([]);

  const handleImage = async (e) => {
    e.preventDefault();
    console.log("saved");

    const formdata = new FormData();
    Object.entries(data).forEach((item) => formdata.set(item[0], item[1]));

    try {

      if (newImage) formdata.set("image", newImage, "image");

      const response = await axios.post("/media/add", formdata);
      console.log("save post: response is", response);

      if (response.data.success)
        // setData({ ...data, image: [...data.image, newImage] });
        setNewImage([...newImage, response.data.image])
        console.log("image 2 is", newImage);

    } catch (error) {

      console.log(error.message);
    }

    console.log("Image is:", newImage);
  };

  useEffect( () => {

  const getData = async () => {

    const response = await axios.get('media/list')

    console.log('response is', response);

    setImages([...response.data])
  }
  getData()
  console.log("images", images );

}, [])
  return (
    <div className={`${toggleClass} container`}>
      <h2>Media</h2>
      <h3>Manage all the media on your site</h3>
      <Form>
        <Form.Group className="mb-3" controlId="form.image">
          <Form.Label>Add an image</Form.Label>
          <Form.Control
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setNewImage(e.currentTarget.files[0])}
          />
        </Form.Group>

        <hr></hr>

        <div className="h-center">
          <Button variant="info" type="submit" onClick={handleImage}>
            Add new
          </Button>
          <section style={{display: "flex" , flexWrap: "wrap"}}>
    {images.map((item) => (
      
        <div key={item._id} >
          <img src={item.image} alt="" />
        </div>
        ))}
  </section>
        </div>
      </Form>
    </div>
  );
}
