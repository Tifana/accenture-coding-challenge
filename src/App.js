import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
