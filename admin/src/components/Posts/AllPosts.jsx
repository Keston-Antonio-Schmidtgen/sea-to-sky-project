import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
  MDBIcon,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

import "./post.scss";

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

    <div className={`${toggleClass}`}>
      <div
        className="d-flex flex-wrap "
        style={{ marginLeft: "10em", width: "80%" }}
      >
        {posts?.map((item, idx) => (

          <MDBCard
            className="m-5"
            style={{
              maxWidth: "22rem",
              maxHeight: "50rem",
              overflow: "hidden",
            }}
            key={idx}
          >
            <MDBCardImage
              style={{ objectFit: "cover", height: "50%" }}
              src={item.image}
              position="top"
              alt="..."
            />
            <MDBCardBody style={{ overflow: "hidden" }}>
              <MDBCardTitle>{item.title}</MDBCardTitle>
              <MDBCardText>{parse(item.body)}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-muted" alignment="end">
              <MDBBtn className="editIcon removeBorder">
                <MDBIcon far icon="edit" />
              </MDBBtn>
              <MDBBtn className="trashIcon removeBorder">
                <MDBIcon fas icon="trash" />
              </MDBBtn>
              <MDBBtn className="publishIcon mx-2  removeBorder">
                {/* <MDBIcon fas icon="magic" /> */}
                <MDBIcon fas icon="cloud-upload-alt" />
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        ))}
      </div>
    </div>
  );
}
