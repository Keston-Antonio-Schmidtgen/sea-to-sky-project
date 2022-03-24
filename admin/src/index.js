import React from "react";
import ReactDOM from "react-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import App from "./App";

import WordContextProvider from "./components/context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <WordContextProvider>
      <App />
    </WordContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
