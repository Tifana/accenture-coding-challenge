import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "./public/images/cp1.jpg" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
  };

  render() {
    const { items } = this.state;
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

        <Carousel>
          {items.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default App;
