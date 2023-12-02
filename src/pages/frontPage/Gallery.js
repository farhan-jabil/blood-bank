import React from "react";

export default function Gallery() {
  return (
    <>
      <div className="gallery bg-light" id="gallery">
        <div className="galleryHeader">
          <h1>Gallery</h1>
        </div>
        <div className="galleryImages container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g1.jpg" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g2.jpg" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g3.jpg" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g4.jpg" alt="" />
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g5.jpg" alt="" />
            </div> */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g9.jpg" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g6.jpg" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g7.jpg" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g8.jpg" alt="" />
            </div>
          </div>
          <div className="row">
            
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src="./images/gallery/g10.jpg" alt="" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12"></div>
            <div className="col-lg-3 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
