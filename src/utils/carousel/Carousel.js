import React from "react";
import first from "./../../images/first.jpg"
import second from "./../../images/second.jpg"
import third from "./../../images/third.jpg"
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

export default function carousel() {
  return (
    <div className="caro">
      <Carousel fade interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
            height={500}
          />
          <Carousel.Caption>
            <h1 className ="carocap">BUY PRODUCTS FROM US ONLINE</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />
          <Carousel.Caption>
          <h1 className ="carocap">WHOLE SPICE PRODUCTS ARE NOW ONLINE WITH US</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 className ="carocap">BUY RICE PRODUCTS ONLINE WITH US</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
