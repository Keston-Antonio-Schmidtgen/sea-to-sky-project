import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function Testimonial() {
  return (
    <div className="features">
    <div className="container">
      <div className="row align-items-center my-5">
      <div className="text-center mt-5 pt-5 ">
      <i className="fas fa-pen-nib text-danger fa-2x"></i>
      <h2 className="my-4">Testimonials</h2>
       </div>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='...' />
          <MDBCarouselCaption>
          <p>
                  <i class="fas fa-quote-left pe-2"></i>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est
                  laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                </p>
                <h5 class="mb-3">Andrea Clay</h5>
                <p>Front-end Developer in Berlin</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
          <MDBCarouselCaption>
          <p>
                  <i class="fas fa-quote-left pe-2"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae
                  quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus
                  eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit
                  quidem dolor veniam.
                </p>
                <h5 class="mb-3">Robert Jacobs</h5>
                <p>Photographer from Greece</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
          <MDBCarouselCaption>
          <p>
                  <i class="fas fa-quote-left pe-2"></i>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                  labore.
                </p>
                <h5 class="mb-3">Blake Dabney</h5>
                <p>Professor at TU Munich</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
    </div>
    </div>
  );
}