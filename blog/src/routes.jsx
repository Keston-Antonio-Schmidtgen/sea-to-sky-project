import { BrowserRouter as Route, Switch } from "react-router-dom";
import {
  Navigation,
  Home,
  Comments,
  Category,
  Pages,
  Post,
  Footer,
} from "./components";

import React from "react";

export default function routes() {
  return (
    <Switch>
      <Navigation />
      <Route path="/" exact element={<Home />} />
      {/* Route for the pages will continue the stuff with server
        please refer to Alkis -> liveCoding -> 23-blog1 -> server when retrieved the tags the ideas are the same
      */}
      <Route path="/pages/:name" exact element={<Pages />} />
      <Route path="/posts" exact element={<Post />} />
      <Route path="/category" exact element={<Category />} />
      <Route path="/comments" exact element={<Comments />} />
      <Route path="/footer" exact element={<Footer />} />
      <Route component={Unknown} />
    </Switch>
  );
}
function Unknown() {
  return <div>Error 404 | Page not found!</div>;
}
