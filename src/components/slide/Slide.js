import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import cp1 from "./cp1.jpg";
import "./Slide.css";

class Slide extends Component {
  state = {
    items: [
      { id: 1, image: cp1 },
      { id: 2, image: cp1 },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div className="slide">
        <Carousel>
          {items.map((item) => (
            <img src={item.image} key={item.id} alt="" />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Slide;
