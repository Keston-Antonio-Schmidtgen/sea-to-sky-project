import React from "react";
import { WordContext } from "../context";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
export default function Admin() {
  const { currentAdmin, setCurrentAdmin } = useContext(WordContext);
  const history = useHistory();
  const handleLogout = () => {
    setCurrentAdmin(null);

<<<<<<< HEAD
export default function  Admin () {
    return (
<Sidenav />
    )
}
=======
    history.push("/login");
  };

  return (
    <div>
      {" "}
      <button onClick={handleLogout}>LogOut</button>
      <h1> posts and blogs been created</h1>
      <div>
        <button>Home</button>
        <button>Posts</button>
        <button>Pages</button>
        <button>Category</button>
        <button>Comments</button>
        <button>Users</button>
      </div>
    </div>
  );
}
>>>>>>> main
