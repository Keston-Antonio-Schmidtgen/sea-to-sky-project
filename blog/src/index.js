import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SeaContext from "./components/context";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navigation from './components/Navigation/Navigation'

ReactDOM.render(
  <BrowserRouter>
    <SeaContext>
    <Navigation />
      <Routes />
    </SeaContext>
  </BrowserRouter>,
  document.getElementById("root")
);
