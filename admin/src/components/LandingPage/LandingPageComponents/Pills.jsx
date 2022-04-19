import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

export default function Pills() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div className="features">
      <div className="container">
        <div className="row align-items-center my-5">
        <div className="text-center mt-5 pt-5 ">
        <i className="fas fa-pen-nib text-danger fa-2x"></i>
        <h2 className="my-4">Visitor Blogs</h2>
        <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae aperiam
              minima non ipsum a magni commodi at beatae, sint pariatur, sequi reprehenderit, laudantium suscipit sunt
              libero consequuntur.</p>
         </div>
    <>
      


    </>
    </div>
    </div>
    </div>
  );
}