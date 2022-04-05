import React from 'react';
import { MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Blogs() {
  return (
    <div className="pricing">
    <div className="container">
      <div className="row align-items-center my-5">
      <div className="text-center mt-5 pt-5 ">
      <i className="fas fa-pen-nib text-danger fa-2x"></i>
      <h2 className="my-4">User Blogs</h2>
      </div>

    
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        <MDBCol md='5'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>

        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>

        <MDBCol md='5'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>

        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>


      </MDBRow>
    
    </div>
    </div>
    </div>
  );
}