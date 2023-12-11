import React from "react";
import { images } from "../../utils/demo_images";

export default function About() {
  return (
    <div className="about container" id="about">
      <div className="aboutHeader">
        <h1>About Us</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt
          incidunt quae, atque placeat,{" "}
        </span>
      </div>
      <div className="aboutBody">
        <div className="aboutText">
          <h2 style={{ color: "grey" }}>About Blood Doners</h2>
          <span>
            Welcome to Blood Donors – a life-saving community dedicated to
            connecting those in need with compassionate donors. Our mission is
            to bridge the gap between individuals requiring blood and willing
            donors who can make a difference. In times of crisis, every drop
            counts, and your participation can be the lifeline someone
            desperately needs.
          </span>
          <br />
          <span>
            Our platform enables seamless communication and coordination,
            allowing individuals seeking blood donations to share their
            requirements while also providing donors with real-time information
            about where their help is needed. At Blood Donors, we believe in the
            power of human kindness and the impact it can have on saving lives.
          </span>
          <br />
          <span>
            Join our community and be a part of this noble cause. Whether you
            are in search of a hero to save the day or you are the hero someone
            is looking for, Blood Donors is here to make the process easy,
            efficient, and effective. Together, we can create a network of
            support that transcends geographical boundaries, making a positive
            impact on countless lives.
          </span>
          <br />
          <span>
            Your generosity matters, and with Blood Donors, you have the
            opportunity to be a beacon of hope for those facing challenging
            health situations. Thank you for being a part of this life-saving
            journey.
          </span>
        </div>
        <div className="aboutImage">
          <img src={images.about} alt="" />
        </div>
      </div>
    </div>
  );
}
