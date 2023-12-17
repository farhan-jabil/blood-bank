import React from "react";
import { images } from "../../utils/demo_images";

export default function Gallery() {
  return (
    <>
      <div className="gallery bg-light" id="gallery">
        <div className="header">
          <h1>Checkout Our Gallery</h1>
        </div>
        <div className="galleryImages container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages1} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages2} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages3} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages4} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages5} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages6} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages7} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages8} alt="" />
            </div>
          </div>
          <div className="row">
            
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages9} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={images.galleryImages10} alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
