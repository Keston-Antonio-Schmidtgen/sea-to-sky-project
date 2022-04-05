import React from "react";
import { WordContext } from "../context";
import { useHistory, Link } from "react-router-dom";
import { useContext, useState } from "react";
import SideNavLeft from "../SideNav/SidenavLeft";
import "./admin.scss";

// import components
import Home from "../Home/Home";
import AllPosts from "../Posts/AllPosts";
import AllPages from "../Pages/Pages";
import Users from "../Users/Users";
import Category from "../Category/Category";
import AddPost from "../Posts/AddPost";
import Tags from "../Tags/Tags";
import Comments from "../Comments/Comments";
import Media from "../Media/Media";

export default function Admin() {
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
      <SideNavLeft setShowComponent={setShowComponent} />
      <button onClick={handleLogout}>LogOut</button>
      <div className="componentContainer">
        <Home toggleClass={showComponent === "home" ? "show" : "hidden"} />
        <AllPosts
          toggleClass={showComponent === "allPosts" ? "show" : "hidden"}
        />
        <AllPages
          toggleClass={showComponent === "allPages" ? "show" : "hidden"}
        />
        <Category
          toggleClass={showComponent === "categories" ? "show" : "hidden"}
        />
        <Users toggleClass={showComponent === "users" ? "show" : "hidden"} />
        <Tags toggleClass={showComponent === "tags" ? "show" : "hidden"} />
        <AddPost
          toggleClass={showComponent === "addPost" ? "show" : "hidden"}
        />
        <Comments
          toggleClass={showComponent === "comments" ? "show" : "hidden"}
        />
        <Media toggleClass={showComponent === "media" ? "show" : "hidden"} />
      </div>
    </div>
  );
}
