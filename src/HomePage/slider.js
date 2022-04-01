import React from "react";
import ForWebsite from "../Assests/For Website.png";
import HasteKing from "../Assests/HasteKing.png";
import SliderImage3 from "../Assests/SliderImage3.png";


import { Carousel } from "react-bootstrap";
import "./slider.css";

const Slider = () => {
  return (
    <div>
      <div className=" carousel-style">
        <div className="bg-color ">
          <Carousel className="inner-style">
            {/* <Carousel.Item>
              <img
                className="d-block image-height  w-100"
                src={Render11}
                alt="First slide"
              />
            </Carousel.Item> */}
            <Carousel.Item>
              <img
                className="d-block image-height   w-100"
                id="imagebg"
                src={ForWebsite}
                alt="Second slide"
              />

              {/* <img className='img-sm' src={Render9} alt="render9"/> */}
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
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
