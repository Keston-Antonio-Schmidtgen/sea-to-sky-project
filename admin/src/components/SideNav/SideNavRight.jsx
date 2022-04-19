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
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
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
  setImage,
  image,
  handlePublish,
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
  /* --------------------Image handling -----------------*/
  const handleImageSubmit = (e) => {
    e.preventDefault();

    setData({ ...data, image: [...data.image, image] });
    setImage("");
  };
  const handleDeleteImage = (idx) => {
    const oldData = { ...data };
    data.image.splice(idx, 1);

    setData({ ...oldData });
  };
  /* ------------------------------------ */
  return (
    <div className="sideNavRightContainer">
      {" "}
      <div className="previewContainer">
        <MDBBtn rounded className="buttonBg removeBorder">
          Save as Draft
        </MDBBtn>
        <MDBBtn
          rounded
          onClick={toggleShowModal}
          className="buttonBg removeBorder"
        >
          Preview Post
        </MDBBtn>
        <MDBBtn
          onClick={handlePublish}
          rounded
          className="buttonBg removeBorder"
        >
          Publish
        </MDBBtn>
      </div>
      <div className="addContainer">
        <MDBBtn
          rounded
          onClick={toggleShowTags}
          className="buttonBg removeBorder"
        >
          Add Tags
        </MDBBtn>
        <MDBCollapse show={showTags}>
          <form action="" onSubmit={handleTagSubmit}>
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
                  <div className="add" key={idx}>
                    {item}
                    <MDBIcon
                      fas
                      icon="trash-alt"
                      onClick={(e) => handleDeleteTag(idx)}
                      style={{ color: "red", cursor: "pointer" }}
                    />
                  </div>
                ))
              : "No tags added"}
          </div>
        </MDBCollapse>
      </div>
      <div className="addContainer">
        <MDBBtn
          rounded
          onClick={toggleShowCategory}
          className="buttonBg removeBorder"
        >
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
                  <div className="add" key={idx}>
                    {item}{" "}
                    <MDBIcon
                      fas
                      icon="trash-alt"
                      onClick={(e) => handleDeleteCategory(idx)}
                      style={{ color: "red", cursor: "pointer" }}
                    />
                  </div>
                ))
              : "No categories added"}
          </div>
        </MDBCollapse>
      </div>
      <div className="addContainer">
        <MDBBtn
          rounded
          onClick={toggleShowImage}
          className="buttonBg removeBorder"
        >
          Add Image
        </MDBBtn>
        <MDBCollapse show={showImage}>
          <form action="" onSubmit={handleImageSubmit}>
            {" "}
            <MDBInput
              label="Enter image link"
              id="form1"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </form>
          <div style={{ display: "flex", height: "50px" }}>
            {data?.image?.length
              ? data.image.map((item, idx) => (
                  <div
                    className="add"
                    // style={{ border: "1px solid", marginRight: "10px" }}
                    key={idx}
                  >
                    {item}{" "}
                    <MDBIcon
                      fas
                      icon="trash-alt"
                      onClick={(e) => handleDeleteImage(idx)}
                      style={{ color: "red", cursor: "pointer" }}
                    />
                  </div>
                ))
              : "No image link added"}
          </div>
        </MDBCollapse>
      </div>
      <div>
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Title:{title}</MDBModalTitle>
                <MDBBtn
                  className="btn-close buttonBg"
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
                <MDBBtn onClick={handlePublish}>Publish</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
}
