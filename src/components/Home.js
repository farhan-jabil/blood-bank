import React from "react";
import { useState } from "react";

export default function Home() {

  const homeDetails = [{
    image: "./images/home/slide-02.jpg",
    heading: "Donate Blood & Save a Life",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde repellendus sint omnis voluptates at ducimus distinctio voluptate doloremque molestias accusamus sapiente, ipsam laboriosam odit a amet in voluptas sit.",
    button1: "Book Appointment",
    button2: "Contact Us",
  },
  {
    image: "./images/home/slide-03.jpg",
    heading: "Donate Blood & Save a Life",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde repellendus sint omnis voluptates at ducimus distinctio voluptate doloremque molestias accusamus sapiente, ipsam laboriosam odit a amet in voluptas sit.",
    button1: "Donate Now",
    button2: "Contact Us",
  }
]

  let [count, setCount] = useState(0);

  
  const homeChangeNext = () => {
    if (count === homeDetails.length - 1) {
      setCount(0)
    } else {
      setCount(count+1)
    }

    // const isLastSlide = count === homeDetails.length - 1;
    // const newIndex = isLastSlide ? 0 : count + 1;
    // setCount(newIndex)
    
  };

  const homeChangePrev = () => {
    if (count === 0) {
      setCount(homeDetails.length-1);
    } else {
      setCount(count-1)
    }

    // const isFirstSlide = count === 0;
    // const newIndex = isFirstSlide ? homeDetails.length - 1 : count - 1;
    // setCount(newIndex)
  };

  // setInterval(() => {
  //   if (count === homeDetails.length - 1) {
  //     setCount(0)
  //   } else {
  //     setCount(count+1)
  //   }
  // }, 5000);

  return (
    <>
      <i id="homeSliderButton1" className="fa-solid fa-2x text-white fa-angle-left" onClick={homeChangePrev} ></i>
      <i id="homeSliderButton2" className="homeSliderButton fa-solid fa-2x text-white fa-angle-right" onClick={homeChangeNext} ></i>
      <div className="home">
        <section className="homeText">
          <h1>
            <b>{`${homeDetails[count].heading}`}</b>
          </h1>
          <br />
          <span>{`${homeDetails[count].text}`}</span>
          <div className="homeTextButton">
            <button type="button" className="btn btn-danger mx-4">
              {homeDetails[count].button1}
            </button>
            <button type="button" className="btn btn-danger">
              {homeDetails[count].button2}
            </button>
          </div>
        </section>
        <img src={`${homeDetails[count].image}`} alt="" height={"100%"} width={"100%"} />
      </div>
    </>
  );
}
