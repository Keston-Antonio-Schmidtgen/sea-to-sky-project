import React from "react";
import { WordContext } from "../context";
import { useHistory, Link } from "react-router-dom";
import { useContext } from "react";
import Sidenav from '../SideNav/sidenav'

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
      {" "}
      <button onClick={handleLogout}>LogOut</button>
      <h1> posts and blogs been created</h1>
      <div>
        <button>Home</button>
        <button>Posts</button>
        <Link to="/allPosts">To All Posts</Link>
        <Link to="/addPost">|To Add Post|</Link>
        <button>Pages</button>
        <button>Category</button>
        <button>Comments</button>
        <button>Users</button>
      </div>
            <Sidenav />

    </div>
  );

}
