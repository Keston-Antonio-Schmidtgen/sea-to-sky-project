/* import React, { useState } from "react"; */
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Navigation() {
  /* const [showNavColor, setShowNavColor] = useState(false); */

  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white" sticky>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Prices</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/blog">Blog</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/contactus" className="nav-link">
                  Contact us
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div className="mask" style={{ backgroundColor: "#FBFBFB" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-black">
            <h1 className="mb-3">Sea To Sky</h1>
            <h4 className="mb-4 "> Cool Stuff</h4>
            <Link
              to="/explore"
              className="btn btn-outline-black btn-lg m-2"
              role="button"
              rel="nofollow"
            >
              Explore
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-black btn-lg m-2"
              role="button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
