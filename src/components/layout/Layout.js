import React from "react";

import classes from "./Layout.css";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <main className={classes.main}>{props.childern}</main>
    </div>
  );
};

export default Layout;
