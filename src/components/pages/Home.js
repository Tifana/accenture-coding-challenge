import Slide from "../slide/Slide";
import Button from "../UI/Button";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slide />
      <div className="home">
        <h1>HomePage</h1>
        <p>
          Do excepteur consequat est ea adipisicing commodo proident quis culpa
          sit. Aliquip dolore nostrud ea cillum anim commodo nostrud magna esse.
          Fugiat amet quis sit reprehenderit nulla anim. Esse veniam ea irure do
          ullamco mollit nisi officia eu. Consequat nostrud proident ullamco sit
          irure aliquip incididunt ea fugiat laboris Lorem. Excepteur laboris
          sint culpa reprehenderit labore proident minim aute magna. Nulla enim
          qui duis labore ullamco esse aliqua ex dolor magna et mollit.
        </p>
        <Button />
      </div>
    </div>
  );
};

// import React, { Component } from "react";
// import Carousel from "react-elastic-carousel";
// import cp1 from "../../src/cp1.jpg";

// class Home extends Component {
//   state = {
//     items: [
//       { id: 1, image: cp1 },
//       { id: 2, image: cp1 },
//     ],
//   };

//   render() {
//     const { items } = this.state;
//     return (
//       <div>
//         <Carousel>
//           {items.map((item) => (
//             <img scr={item.image} key={item.id} alt="" />
//           ))}
//         </Carousel>
//       </div>
//     );
//   }
// }

export default Home;
