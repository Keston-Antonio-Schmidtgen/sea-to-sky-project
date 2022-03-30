import { Link } from "react-router-dom";
import { MDBFooter } from 'mdb-react-ui-kit';
import { MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </Link>
          <Link href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </Link>
          <Link href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </Link>
          <Link href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </Link>
          <Link href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </Link>
          <Link href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </Link>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon fas icon="pencil-alt m-2" /> Sea To Sky
              </h6>
              <p>
              It is a community of platforms designed with accessibility, performance, security, and ease of use in mind. We believe great software should work with little setup, so users can focus on sharing their story, product, or service.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About Us</h6>
              <p>
                <Link href='#!' className='text-reset'>
                  Contact Us
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Join Us
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Vist Us
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Find Us
                </Link>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link href='#!' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Settings
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Orders
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Help
                </Link>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> 1091 Kreuzberg, Berlin, Germany
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@seatosky.de
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +49 30 331234212
              </p>
              <p>
                <i className='fas fa-print me-3'></i> +49 30 377589832
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <Link className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </Link>
      </div>
    </MDBFooter>
  );
}