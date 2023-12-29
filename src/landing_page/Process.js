import React from "react";
import { images } from "../utils/demo_images";

export default function Process() {
  return (
    <>
      <div className="process" id="process">
        <div className="container">
          <div className="header">
            <h1>Donation Process</h1>
            <span>
              The donation process from the time you arrive center until the
              time you leave
            </span>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card process-cards" style={{width: "18rem"}}>
                <img src={images.galleryImages1} className="card-img-top" />
                <div className="card-body text-secondary">
                  <p className="card-title fw-bold">1 - Registration</p>
                  <p className="">
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                  </p>
                  <a href="#" className="btn btn-danger">
                    Readmore <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card process-cards" style={{width: "18rem"}}>
                <img src={images.galleryImages2} className="card-img-top" />
                <div className="card-body text-secondary">
                  <p className="card-title fw-bold">2 - Seeing</p>
                  <p className="">
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                  </p>
                  <a href="#" className="btn btn-danger">
                    Readmore <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card process-cards" style={{width: "18rem"}}>
                <img src={images.galleryImages3} className="card-img-top" />
                <div className="card-body text-secondary">
                  <p className="card-title fw-bold">3 - Donation</p>
                  <p className="">
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                  </p>
                  <a href="#" className="btn btn-danger">
                    Readmore <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card process-cards" style={{width: "18rem"}}>
                <img src={images.galleryImages4} className="card-img-top" />
                <div className="card-body text-secondary">
                  <p className="card-title fw-bold">4 - Save Life</p>
                  <p className="">
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                  </p>
                  <a href="#" className="btn btn-danger">
                    Readmore <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
