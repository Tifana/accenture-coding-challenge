import React from "react";
import { Link } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Accenture 🚀 </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
