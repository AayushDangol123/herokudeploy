import React from "react";
import secondCaro from "./../../images/secondCaro.jpg"
import secondCarotwo from  "./../../images/secondCaro.jpg"
import p1 from "./../../images/p1.jpg"
import p2 from "./../../images/p2.jpg"
import p3 from "./../../images/p3.jpg"
import p4 from "./../../images/p4.jpg"
import Carousel from "react-bootstrap/Carousel";
import "./second.css"

function SecondCaro() {
  return (
    <div>
        <Carousel>
  <Carousel.Item interval={700}>
    <img
      className="d-block w-100"
      src={secondCaro}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={700}>
    <img
      className="d-block w-100"
      src={secondCarotwo}
      alt="Second slide"
    />
  </Carousel.Item>
  </Carousel>
  <div className="container">
  <div class="row">
  <div class="column">
      <img src ={p2}/>
  </div>
  <div class="column">
      <img src={p3}/>
  </div>
  <div class="column" id="p4">
      <img src={p4}/>
  </div>
  <div class="column">
      <img src={p1}/>
  </div>
  </div>
  </div>
  </div>
  );
}
export default SecondCaro;
