import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../utils/demo_images";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className={`customPagingButtons ${
          i === activeSlide ? "bg-white" : "bg-secondary"
        }`}
        key={i}
      ></div>
    ),
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    afterChange: (current, next) => {
      setActiveSlide(current);
    },
  };

  return (
    <>
      <section className="hero">
        <Slider {...settings}>
          <div className="heroBody">
            <div className="heroImages">
              <img src={images.hero1} alt="" />
            </div>
            <div className="heroText">
              <h1>
                <b className="">Donate Blood & Save a Life</b>
              </h1>
              <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur unde repellendus sint omnis voluptates at ducimus
                distinctio voluptate doloremque molestias accusamus sapiente,
                ipsam laboriosam odit a amet in voluptas sit.
              </span>
              <div className="heroTextButton ">
                <button type="button" className="btn btn-danger">
                  Request for Blood
                </button>
                <button type="button" className="btn btn-danger">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
          <div className="heroBody">
            <div className="heroImages">
              <img src={images.hero2} alt="" />
            </div>
            <div className="heroText">
              <h1>
                <b className="">Donate Blood & Save a Life</b>
              </h1>
              <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur unde repellendus sint omnis voluptates at ducimus
                distinctio voluptate doloremque molestias accusamus sapiente,
                ipsam laboriosam odit a amet in voluptas sit.
              </span>
              <div className="heroTextButton ">
                <button type="button" className="btn btn-danger">
                  Request for Blood
                </button>
                <button type="button" className="btn btn-danger">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
