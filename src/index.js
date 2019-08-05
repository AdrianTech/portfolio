import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.scss";

const rootElement = document.getElementById("wrapper");
ReactDOM.render(
   <Router>
      <Main />
   </Router>,
   rootElement
);
