import { React, useState, useContext } from "react";
import { WordContext } from "../context";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Media({toggleClass}) {
  const [newImage, setNewImage] = useState("");
  const { currentAdmin } = useContext(WordContext);
  const [data, setData] = useState({
    owner: currentAdmin._id,
    image: [],
  });

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
      setData({ ...data, image: [...data.image, newImage] });
    
} catch (error) {
  console.log(error.message);
}
   
    console.log("Image is:", newImage);
  };

  return (
    <div className={`${toggleClass} container`}>
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
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
}
