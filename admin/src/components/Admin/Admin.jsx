import React from "react";
import { WordContext } from "../context";
import { useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import SideNav from "../SideNav/sidenav"

export default function Admin() {
  const { currentAdmin, setCurrentAdmin } = useContext(WordContext);
  const history = useHistory();
  const handleLogout = () => {

    setCurrentAdmin(null);

    history.push("/login");
  };
  console.log("currentAdmin is from admin", currentAdmin);
  return (
    <div>
      <SideNav />
      <button onClick={handleLogout}>LogOut</button>
        <Link to="/allPosts">To All Posts</Link>
        <Link to="/addPost">|To Add Post|</Link>
        
            

    </div>
  );

}
