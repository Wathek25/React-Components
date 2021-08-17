import React from "react";
import { Carousel } from "react-bootstrap";
import car1 from "./imgs/car1.PNG";
import car2 from "./imgs/car2.PNG";
import car3 from "./imgs/car3.PNG";

const CarouselC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={car1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={car2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={car3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
