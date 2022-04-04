import React from 'react';
import { MDBCard,  MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBCardFooter, MDBCardHeader  } from 'mdb-react-ui-kit';

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="container">
        <div className="row align-items-center my-5">
        <div className="text-center mt-5 pt-5 ">
        <i className="fas fa-pen-nib text-danger fa-2x"></i>
        <h2 className="my-4">Our Prices</h2>
        </div>
        
     
    <MDBRow className='row-cols-1 row-cols-md-4 g-4' >
      <MDBCol>
        <MDBCard>
          
        <MDBCardHeader><h5>SINGLE USE</h5></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>€ 129 /year</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#' color='danger'>BUY NOW</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>Usage for 1 domain/app</MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         
        <MDBCardHeader><h5>ESSENTIAL</h5></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>€ 219 /year</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#' color='info'>BUY NOWe</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>Lifetime & unlimited usage</MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         
        <MDBCardHeader><h5>ADVANCED</h5></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>€ 377 /year</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#' color='secondary'>BUY NOW</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>Lifetime & unlimited usage</MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         
        <MDBCardHeader><h5>BUNDLE</h5></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>599 /year</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#' color='success'>BUY NOW</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>The Bundle contains everything</MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
 
    <hr class="my-5" />
    </div>
    </div>
    </div>
    
  );
  
}