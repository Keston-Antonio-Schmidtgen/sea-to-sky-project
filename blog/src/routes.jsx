import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './components/Home/Home'

import Comments from './components/Comments/Comments'
import Category from './components/Category/Category'
import Pages from './components/Pages/Pages'
import Post from './components/Post/Post'




export default function Routes() {
  return (
    <Switch>
      
      <Route path="/" exact component={Home } />
      {/* Route for the pages will continue the stuff with server
        please refer to Alkis -> liveCoding -> 23-blog1 -> server when retrieved the tags the ideas are the same
      */}
      <Route path="/page/:id" exact component={Pages } />
      <Route path="/posts" exact component={Post} />
      <Route path="/category" exact component={Category } />
      <Route path="/comments" exact component={Comments} />
      {/* <Route path="/footer" exact component={Footer} /> */}
      <Route component={Unknown} />
    </Switch>
  );
}
function Unknown() {
  return <div><h1>Error 404 | Page not found!</h1></div>;
}
