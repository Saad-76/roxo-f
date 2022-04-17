import React from "react";


import SliderOneWeb from "../Assests/web roxo/sliders/SliderOneWeb.jpg";
import SliderTwoWeb from "../Assests/web roxo/sliders/SliderTwoWeb.jpg";
import SliderOneMbl from "../Assests/imagesHome/for slider/slider1 mobile.png";
import SliderTwoMbl from "../Assests/imagesHome/for slider/slider 2 mobile.png";



import { Carousel } from "react-bootstrap";
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

            {/* <Carousel.Item>
              <img
                className="d-block image-height   w-100"
                id="imagebg"
                src={moblSlider}
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block image-height   w-100"
                id="imagebg"
                src={ForWebsite}
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block image-height  w-100"
                src={SliderImage3}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item className="carousel-image">
              <img
                className="d-block image-height   w-100"
                src={HasteKing}
                alt="Third slide"
              />
            </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
