import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SeaContext from "./components/context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <SeaContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SeaContext>,
  document.getElementById("root")
);
