import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import "./Slide.css";

class Slide extends Component {
  pic = {
    items: [
      { id: 1, image: pic1 },
      { id: 2, image: pic2 },
      { id: 2, image: pic3 },
    ],
  };

  render() {
    const { items } = this.pic;
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
