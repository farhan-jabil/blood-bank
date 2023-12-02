import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Hero() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="hero" id="hero">
        <Slider {...settings}>
          <div className="position-relative">
            <div className="heroText">
              <h1>
                <b className="">Donate Blood & Save a Life</b>
              </h1>
              <br />
              <span className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur unde repellendus sint omnis voluptates at ducimus
                distinctio voluptate doloremque molestias accusamus sapiente,
                ipsam laboriosam odit a amet in voluptas sit.
              </span>
              <div className="heroTextButton ">
                <Link to="/emergencyRequest">
                  <button type="button" className="btn btn-danger">
                    Request for Blood
                  </button>
                </Link>
                <Link to="/login">
                  <button type="button" className="btn btn-danger">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
            <img src="./images/home/slide-02.jpg" alt="" />
          </div>
          <div className="position-relative">
            <div className="heroText">
              <h1>
                <b className="">Donate Blood & Save a Life</b>
              </h1>
              <br />
              <span className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur unde repellendus sint omnis voluptates at ducimus
                distinctio voluptate doloremque molestias accusamus sapiente,
                ipsam laboriosam odit a amet in voluptas sit.
              </span>
              <div className="heroTextButton ">
                <Link to="/emergencyRequest">
                  <button type="button" className="btn btn-danger">
                    Request for Blood
                  </button>
                </Link>
                <Link to="/login">
                  <button type="button" className="btn btn-danger">
                    Donate Now
                  </button>
                </Link>
              </div>
            </div>
            <img src="./images/home/slide-03.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}
