import React from "react";
import {Link} from "react-router-dom";
import "./Home.scss"

export default function Home({ homeStyle, toggleClass }) {
  return (
    <div
      style={{
        display: homeStyle,
        
        fontSize: "20px",
      }}
      className={`${toggleClass}`}
    >
     <div style={{fontSize: "30px", marginBottom: "5px"
}}>My Home </div>
      <div style={{ marginBottom: "30px"
}}>Your hub for showing, posting, and growing your site.

</div>
      <div className="boxes">
      <Link to="/allposts"> <div>All Posts</div></Link>
      <Link to="/allpages"><div>All Pages</div></Link>
      <Link to="/media"><div>All Media</div></Link>
      </div>
    </div>
  );
}
