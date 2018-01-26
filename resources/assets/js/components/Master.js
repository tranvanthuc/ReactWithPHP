// Master.js

import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";

class Master extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/">Home AppDividend</Link>
            </div>
            <hr />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-item">Add Link</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Master;
