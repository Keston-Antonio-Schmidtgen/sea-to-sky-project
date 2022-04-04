import React from 'react';
import { MDBCard,  MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCardText, MDBBtn, MDBCardFooter, MDBRow, MDBCol  } from 'mdb-react-ui-kit';

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="container">
        <div className="row align-items-center my-5">
        <div className="text-center mt-5 pt-5 ">
        <i className="fas fa-pen-nib text-danger fa-2x"></i>
        <h2 className="my-4">Our Prices</h2>
        </div>
        
        <MDBRow className='row-cols-1 row-cols-md-4 g-5 my-2 ' style={{backgroundColor: "#FFBC97"}}>
      <MDBCol>
        <MDBCard>

            
        <MDBCard alignment='center'>
      <MDBCardHeader>SINGLE USE</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>€ 129 /year</MDBCardTitle>
        <MDBCardText>Usage for 1 domain/app:</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>Premium Components</MDBCardFooter>
    </MDBCard>

    <MDBCard alignment='center'>
      <MDBCardHeader>Essential</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>€ 219 /year</MDBCardTitle>
        <MDBCardText>Lifetime & unlimited usage of:</MDBCardText>
        <MDBBtn href='#'>Go somewhere</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>2 days ago</MDBCardFooter>
    </MDBCard>
    </MDBCard>
      </MDBCol>
    </MDBRow>
    <hr class="my-5" />
    </div>
    </div>
    </div>
    
  );
  
}