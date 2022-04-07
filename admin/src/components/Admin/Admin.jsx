import React from "react";
import { WordContext } from "../context";
import { useHistory, Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import SideNavLeft from "../SideNav/SidenavLeft";
import "./admin.scss";

// import components
import Home from "../Home/Home";
import AllPosts from "../Posts/AllPosts";
import AllPages from "../Pages/AllPages";
import AddPage from "../Pages/AddPage";
import Users from "../Users/Users";
import AddUser from "../Users/AddUser";
import Category from "../Category/Category";
import AddPost from "../Posts/AddPost";
import Tags from "../Tags/Tags";
import Comments from "../Comments/Comments";
import Media from "../Media/Media";

export default function Admin() {
  const sidenavContent = useRef(null);
  /* ------------------COMPONENT RENDERING STATES----------------------- */
  const [showComponent, setShowComponent] = useState("home");

  /* ------------------------------------------------------------------------- */
  const { currentAdmin, setCurrentAdmin } = useContext(WordContext);
  const history = useHistory();
  const handleLogout = () => {
    setCurrentAdmin(null);

    history.push("/login");
  };
  console.log("currentAdmin is from admin", currentAdmin);
  console.log("show home is from admin", showComponent);
  return (
    <div className="adminContainer">
      <button onClick={handleLogout}>LogOut</button>
      <div>
        <SideNavLeft
          setShowComponent={setShowComponent}
          refer={sidenavContent}
        />

        <div className="componentContainer" ref={sidenavContent}>
          <Home toggleClass={showComponent === "home" ? "show" : "hidden"} />
          <AllPosts
            toggleClass={showComponent === "allPosts" ? "show" : "hidden"}
          />
          <AddPost
            toggleClass={showComponent === "addPost" ? "show" : "hidden"}
          />
          <AllPages
            toggleClass={showComponent === "allPages" ? "show" : "hidden"}
          />
          <AddPage
            toggleClass={showComponent === "addPage" ? "show" : "hidden"}
          />
          <Category
            toggleClass={showComponent === "categories" ? "show" : "hidden"}
          />
          <Users toggleClass={showComponent === "users" ? "show" : "hidden"} />
          <AddUser toggleClass={showComponent === "addUser" ? "show" : "hidden"} />
          
          <Tags toggleClass={showComponent === "tags" ? "show" : "hidden"} />
          <Comments
            toggleClass={showComponent === "comments" ? "show" : "hidden"}
          />
          <Media toggleClass={showComponent === "media" ? "show" : "hidden"} />
        </div>
      </div>
    </div>
  );
}
