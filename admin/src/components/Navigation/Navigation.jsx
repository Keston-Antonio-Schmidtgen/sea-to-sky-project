/* import React, { useState } from "react"; */
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon 
} from 'mdb-react-ui-kit';

export default function Navigation() {
  /* const [showNavColor, setShowNavColor] = useState(false); */
  
    return (
      <header>
      <MDBNavbar expand='lg' light bgColor='white' sticky>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Prices</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Blog</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Contact us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
  
        <div className='mask' style={{ backgroundColor: '#FBFBFB' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              <h1 className='mb-3'>Sea To Sky</h1>
              <h4 className='mb-4 '> Cool Stuff</h4>
              <a
                className='btn btn-outline-black btn-lg m-2'
                href='http://localhost:3005/login'
                role='button'
                rel='nofollow'
                target='_blank'
              >
                Explore
              </a>
              <a
                className='btn btn-outline-black btn-lg m-2'
                href='http://localhost:3005/register'
                target='_blank'
                role='button'
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
    </header>
  );
} 


