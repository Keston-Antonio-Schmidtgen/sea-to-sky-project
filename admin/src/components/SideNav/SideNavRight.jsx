import React, { useState } from "react";
import parse from "html-react-parser";
import {
  MDBCollapse,
  MDBBtn,
  MDBInput,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import "./sideNav.scss";

export default function SideNavRight({
  title,
  subtitle,
  body,
  setTag,
  tag,
  data,
  setData,
  category,
  setCategory,
}) {
  const [showImage, setShowImage] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const toggleShowTags = () => setShowTags(!showTags);
  const toggleShowCategory = () => setShowCategories(!showCategories);
  const toggleShowImage = () => setShowImage(!showImage);

  /* -------------Modal States------------------- */
  const [centredModal, setCentredModal] = useState(false);

  const toggleShowModal = () => setCentredModal(!centredModal);
  /* --------------------------------------------- */
  /* --------------------Tag handling -----------------*/
  const handleTagSubmit = (e) => {
    e.preventDefault();

    setData({ ...data, tags: [...data.tags, tag] });
    setTag("");
  };
  const handleDeleteTag = (idx) => {
    const oldData = { ...data };
    data.tags.splice(idx, 1);

    setData({ ...oldData });
  };
  /* ------------------------------------ */
  /* --------------------Category handling -----------------*/
  const handleCategorySubmit = (e) => {
    e.preventDefault();

    setData({ ...data, categories: [...data.categories, category] });
    setCategory("");
  };
  const handleDeleteCategory = (idx) => {
    const oldData = { ...data };
    data.categories.splice(idx, 1);

    setData({ ...oldData });
  };
  /* ------------------------------------ */
  return (
    <div className="sideNavRightContainer">
      {" "}
      <MDBBtn rounded>Save as Draft</MDBBtn>
      <MDBBtn rounded onClick={toggleShowModal}>
        Preview Post
      </MDBBtn>
      <MDBBtn rounded>Publish</MDBBtn>
      <MDBBtn rounded onClick={toggleShowTags}>
        Add Tags
      </MDBBtn>
      <MDBCollapse show={showTags}>
        <form action="" onSubmit={handleTagSubmit}>
          {" "}
          <MDBInput
            label="Enter tag"
            id="form1"
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </form>
        <div style={{ display: "flex", height: "50px" }}>
          {data?.tags?.length
            ? data.tags.map((item, idx) => (
                <div
                  style={{ border: "1px solid", marginRight: "10px" }}
                  key={idx}
                >
                  {item}{" "}
                  <span
                    onClick={(e) => handleDeleteTag(idx)}
                    style={{ color: "red" }}
                  >
                    x
                  </span>
                </div>
              ))
            : "No tags added"}
        </div>
      </MDBCollapse>
      <MDBBtn rounded onClick={toggleShowCategory}>
        Add Category
      </MDBBtn>
      <MDBCollapse show={showCategories}>
        <form action="" onSubmit={handleCategorySubmit}>
          {" "}
          <MDBInput
            label="Enter Category"
            id="form1"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </form>
        <div style={{ display: "flex", height: "50px" }}>
          {data?.categories?.length
            ? data.categories.map((item, idx) => (
                <div
                  style={{ border: "1px solid", marginRight: "10px" }}
                  key={idx}
                >
                  {item}{" "}
                  <span
                    onClick={(e) => handleDeleteCategory(idx)}
                    style={{ color: "red" }}
                  >
                    x
                  </span>
                </div>
              ))
            : "No categories added"}
        </div>
      </MDBCollapse>
      <MDBBtn rounded onClick={toggleShowImage}>
        Add Image
      </MDBBtn>
      <MDBCollapse show={showImage}>
        <MDBBtn floating tag="a">
          <MDBIcon fas icon="download" />
        </MDBBtn>
      </MDBCollapse>
      <div>
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Title:{title}</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShowModal}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <h5>Subtitle:{parse(subtitle)}</h5>
                <p>Main:{parse(body)}</p>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShowModal}>
                  Close
                </MDBBtn>
                <MDBBtn>Publish</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
}
