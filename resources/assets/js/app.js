// app.js

require("./bootstrap");
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Master from "./components/Master";
import CreateItem from "./components/CreateItem";

render(
  <Router>
    <div>
      <Route path="/" component={Master} />
      <Route path="/add-item" component={CreateItem} />
    </div>
  </Router>,
  document.getElementById("example")
);
