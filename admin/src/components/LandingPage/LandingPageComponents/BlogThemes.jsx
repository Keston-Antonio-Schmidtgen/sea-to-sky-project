
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';

export default function BlogThemes() {
  return (
    <div className="blog themes">
      <div className="container">
        <div className="row align-items-center my-5">
        <div className="text-center mt-5 pt-5">
        <i className="fas fa-pen-nib text-danger fa-2x"></i>
        <h2 className="my-4">Blog Themes</h2>
        </div>
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement  src='https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/06/23160820/Career-in-Sports-01.png' alt='...' />
          <MDBCarouselCaption>
            <h3>Sport Blog</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://handbookgermany.de/content/wtg/en/live/traveling-within-germany/jcr:content/par/image/image.img.1008.medium.jpg' alt='...' />
          <MDBCarouselCaption>
          <h3>Travel Blog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://reflectionsglobal.com/wp-content/uploads/2020/10/media_entertainment.png' alt='...' />
          <MDBCarouselCaption>
          <h3>Entertainment Blog</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
    </div>
    </div>
   
  );
}