import React from "react";
import { images } from "../../utils/demo_images";

export default function About() {
  return (
    <div className="about container" id="about">
      <div className="header">
        <h1>About Us</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt
          incidunt quae, atque placeat,{" "}
        </span>
      </div>
      <div className="aboutBody">
        <div className="aboutText">
          <h2 style={{ color: "grey" }}>About Blood Doners</h2>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
          <div>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some formhumour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage. industry's standard dummy has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
          <div>
            Industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </div>
        </div>
        <div className="aboutImage">
          <img src={images.about} alt="" />
        </div>
      </div>
    </div>
  );
}
