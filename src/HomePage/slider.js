import { React } from "react";
import { Carousel } from "react-bootstrap";

import SliderOneWeb from "../Assests/web roxo/sliders/SliderOneWeb.jpg";
import SliderTwoWeb from "../Assests/web roxo/sliders/SliderTwoWeb.jpg";
import SliderOneMbl from "../Assests/imagesHome/for slider/slider1 mobile.png";
import SliderTwoMbl from "../Assests/imagesHome/for slider/slider 2 mobile.png";
import PreSale from "./preSale";
import "./slider.css";

const Slider = () => {
  return (
    <div>
      <div className=" carousel-style">
        <div className="bg-color ">
          <Carousel className="inner-style">
            <Carousel.Item>
              <img
                className="d-block image-height   w-100"
                id="imagebg"
                src={SliderOneWeb}
                alt="Second slide"
              />

              <img
                className="img-sm"
                src={SliderOneMbl}
                alt="render9"
                width="100%"
                height="600px"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block image-height   w-100"
                id="imagebg"
                src={SliderTwoWeb}
                alt="Second slide"
              />

              <img
                className="img-sm"
                src={SliderTwoMbl}
                alt="render9"
                width="100%"
                height="600px"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <PreSale />
    </div>
  );
};

export default Slider;
