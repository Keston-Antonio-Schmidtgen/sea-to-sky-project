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

export default function SideNavRight({ title, subtitle, body }) {
  const [showImage, setShowImage] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showTags, setShowTags] = useState(false);
  //const toggleShow = () => setShowShow(!showShow);

  const toggleShowTags = () => setShowTags(!showTags);
  const toggleShowCategory = () => setShowCategories(!showCategories);
  const toggleShowImage = () => setShowImage(!showImage);

  /* -------------Modal States------------------- */
  const [centredModal, setCentredModal] = useState(false);

  const toggleShowModal = () => setCentredModal(!centredModal);
  /* --------------------------------------------- */
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
        <MDBInput label="Enter tag" id="form1" type="text" />
      </MDBCollapse>
      <MDBBtn rounded onClick={toggleShowCategory}>
        Add Category
      </MDBBtn>
      <MDBCollapse show={showCategories}>
        <MDBInput label="Enter Category" id="form1" type="text" />
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
                <MDBModalTitle>{title}</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShowModal}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p>{parse(body)}</p>
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
