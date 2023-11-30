import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Hero() {
  // const homeDetails = [
  //   {
  //     image: "./images/home/slide-02.jpg",
  //     heading: "Donate Blood & Save a Life",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde repellendus sint omnis voluptates at ducimus distinctio voluptate doloremque molestias accusamus sapiente, ipsam laboriosam odit a amet in voluptas sit.",
  //     button1: "Request for Blood",
  //     button2: "Donate Now",
  //   },
  //   {
  //     image: "./images/home/slide-03.jpg",
  //     heading: "Donate Blood & Save a Life",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde repellendus sint omnis voluptates at ducimus distinctio voluptate doloremque molestias accusamus sapiente, ipsam laboriosam odit a amet in voluptas sit.",
  //     button1: "Request for Blood",
  //     button2: "Donate Now",
  //   },
  // ];

  // let [count, setCount] = useState(0);

  // const homeChangeNext = () => {
  //   if (count === homeDetails.length - 1) {
  //     setCount(0);
  //   } else {
  //     setCount(count + 1);
  //   }
  // };

  // const homeChangePrev = () => {
  //   if (count === 0) {
  //     setCount(homeDetails.length - 1);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="hero" id="hero">
        {/* <i
          id="heroSliderButton1"
          className="fa-solid fa-2x text-white fa-angle-left"
          onClick={homeChangePrev}
        ></i>
        <i
          id="heroSliderButton2"
          className="homeSliderButton fa-solid fa-2x text-white fa-angle-right"
          onClick={homeChangeNext}
        ></i>
        <div className="heroText">
          <h1>
            <b className="">{`${homeDetails[count].heading}`}</b>
          </h1>
          <br />
          <span className="">{`${homeDetails[count].text}`}</span>
          <div className="heroTextButton ">
            <Link to="/emergencyRequest">
              <button type="button" className="btn btn-danger">
                {homeDetails[count].button1}
              </button>
            </Link>
            <Link to="/login">
              <button type="button" className="btn btn-danger">
                {homeDetails[count].button2}
              </button>
            </Link>
          </div>
        </div>
        <img src={`${homeDetails[count].image}`} alt="" /> */}

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
