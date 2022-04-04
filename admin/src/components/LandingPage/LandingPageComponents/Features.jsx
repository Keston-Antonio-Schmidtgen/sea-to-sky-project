import React from 'react';
import { MDBCard,  MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="row align-items-center my-5">
        <div className="text-center mt-5 pt-5">
        <i className="fas fa-pen-nib text-danger fa-2x"></i>
        <h2 className="my-4">Our Features</h2>
        </div>
    <MDBRow className='row-cols-1 row-cols-md-4 g-5 my-2 ' style={{backgroundColor: "#FFBC97"}}>
      <MDBCol>
        <MDBCard>
          
          <MDBCardBody>
          <MDBIcon far icon="file-alt" />
            <MDBCardTitle>Easily Manage Your Website Content</MDBCardTitle>
            <MDBCardText>
            Easily manage your website’s content as much as you want, whenever you want. With the intuitive 'Sea to Sky' content management system, you can login from any modern browser and make changes to your website without programming knowledge.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          
          <MDBCardBody>
          <MDBIcon fas icon="desktop" />
            <MDBCardTitle>Unlimited Pages, Posts, Products & More</MDBCardTitle>
            <MDBCardText>
            Don’t limit yourself - You can add images, text, files, links, and embed media right on the content areas of your pages anytime you want and we don’t restrict the number of pages, posts, or products that you can add.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          
          <MDBCardBody>
          <MDBIcon far icon="comment-alt" />
            <MDBCardTitle>Blog Posting</MDBCardTitle>
            <MDBCardText>
            Take advantage of built-in blogging and blog category management by easily adding/editing/removing content as you need to. Add news articles on an ongoing basis directly from your browser!
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          
          <MDBCardBody>
          <MDBIcon fas icon="server" />
            <MDBCardTitle>Restore Deleted Pages & Rollback Versioning</MDBCardTitle>
            <MDBCardText>
            You can easily restore deleted page content (before it is deleted permanently) and even roll back page text to previous versions using built-in version control features. Save pages so that only you can see what they look like or publish them live whenever you need.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
    </div>
  );
}
