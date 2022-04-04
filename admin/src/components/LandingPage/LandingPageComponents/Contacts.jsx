import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Contacts() {
  return (
    <div className="contacts">
      <div class="container">
        <div class="row align-items-center my-5">
    <form>
      <div class="text-center mt-5 pt-5">
        <i class="fas fa-pen-nib text-danger fa-2x"></i>
        <h2 class="my-4">Contact</h2>
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae aperiam
              minima non ipsum a magni commodi at beatae, sint pariatur, sequi reprehenderit, laudantium suscipit sunt
              libero consequuntur.</p>
          </div>
        </div>
      </div>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' color='danger' block>
        Sign in
      </MDBBtn>
    </form>
    </div>
    </div>
    </div>
  );
}