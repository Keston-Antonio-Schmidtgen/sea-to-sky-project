import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import AllPosts from "./components/Posts/AllPosts";
import AddPost from "./components/Posts/AddPost";
import Pages from "./components/Pages/Pages";
import EmailConfirm from "./components/Email/Email";
import ForgotPass from "./components/Password/ForgotPass";
import ChangePass from "./components/Password/ChangePass";
import Home from "./components/Home/Home";

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/allposts" component={AllPosts} />
      <Route path="/home" component={Home} />

      {/* This routes shouldn't be here!
      Please consider removing 'em and only render these components direct inside the admin page
      */}

      <Route path="/addpage" component={Pages} />
      <Route path="/emailconfirm/:token" exact component={EmailConfirm} />
      <Route path="/forgotpass" exact component={ForgotPass} />
      <Route path="/changepassword/:token" exact component={ChangePass} />
      <Route path="/addpost" component={AddPost} />

      {/* /* -------------------------------------------------------------------------- 
      /*                   End of routes that need to be removeed                   
      /* --------------------------------------------------------------------------  */}
      <Route component={Unknown} />
    </Switch>
  );
}

function Unknown() {
  return <div>Error 404 | Page not found!</div>;
}
