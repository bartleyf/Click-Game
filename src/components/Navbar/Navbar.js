import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div>
    <nav className="navbar navbar-dark bg-gunmetal static-top">
      <ul>
        <li className="title click">Memory Game</li>

        <li className="title score">
          Current Game Score: {props.score} | Top Score: {props.highScore}
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
