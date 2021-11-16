import React from "react";
import secondCaro from "./../../images/secondCaro.jpg"
import secondCarotwo from  "./../../images/secondCaro.jpg"
import Carousel from "react-bootstrap/Carousel";

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
      src={secondCaro}
      alt="Second slide"
    />
  </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default SecondCaro;
