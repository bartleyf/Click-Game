import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div>
    <nav className="navbar navbar-dark bg-gunmetal static-top">
      <ul>
        <li className="title click">Memory Game</li>

        <li className="title center">
          <p>Start clicking on the images, but don't do it twice!</p>
        </li>

        <li className="title score">
          <p>Current Score: {props.score}</p>
          <p>Top Score: {props.highScore}</p>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
