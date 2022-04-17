import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Navigation() {
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
                  Sea To Sky
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

<section>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/Photos/new-templates/content-creator/img1.jpg')",
          height: 500, }} >
        <div className="mask" style={{ backgroundColor: "rgba(249, 195, 122, .2)" }}>
          <div className="d-flex justify-content-center align-items-center h-100"> 
          <div className="row w-100">
            <div className="col-xl-10 mx-auto">
              <div className="card mask-custom text-white text-center" ClassName="border-radius: .75rem;" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="card-body p-5">
                  <div className="text-white">
              <h1 className="mb-3">Sea To Sky</h1>
              <h4 className="mb-3">Cool Stuff</h4>
              <Link
                className="btn btn-outline-light btn-lg m-2"
                href="#!"
                role="button"
              >
                Explore
              </Link>
              <Link
                className="btn btn-outline-light btn-lg m-2"
                to="./Register"
                role="button"
              >
                Get Started
              </Link>
            </div>
               </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    </header>
  );
}
