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
          toggleClass={showComponent === "category" ? "show" : "hidden"}
        />
        <Users toggleClass={showComponent === "users" ? "show" : "hidden"} />
      </div>
      <SideNavLeft setShowComponent={setShowComponent} />
    </div>
  );
}
