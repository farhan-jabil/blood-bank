import React from "react";
import { images } from "../utils/demo_images";

export default function Blog() {
  return (
    <>
      <div className="blog" id="blog">
        <div className="container">
          <div className="header">
            <h1>Latest Blog</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              fringilla vel nisl a dictum. Donec ut est arcu. <br /> Donec
              hendrerit velit consectetur adipiscing elit.
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="blog-cards">
                <div className="blog-cards-image">
                  <img src={images.galleryImages1} className="card-img-top" />
                </div>
                <div className="blog-cards-text">
                  <p className="fw-bold">Latest News about Smarteye</p>
                  <p className="intented">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec
                    hendrerit consectetur adipiscing elit.
                  </p>
                  <small className="" style={{backgroundColor: "lightgrey"}}>
                  27 Comments / Blog Design / Read More
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-cards">
                <div className="blog-cards-image">
                  <img src={images.galleryImages2} className="card-img-top" />
                </div>
                <div className="blog-cards-text">
                  <p className="fw-bold">Latest News about Smarteye</p>
                  <p className="intented">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec
                    hendrerit consectetur adipiscing elit.
                  </p>
                  <small className="" style={{backgroundColor: "lightgrey"}}>
                  27 Comments / Blog Design / Read More
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-cards">
                <div className="blog-cards-image">
                  <img src={images.galleryImages3} className="card-img-top" />
                </div>
                <div className="blog-cards-text">
                  <p className="fw-bold">Latest News about Smarteye</p>
                  <p className="intented">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec
                    hendrerit consectetur adipiscing elit.
                  </p>
                  <small className="" style={{backgroundColor: "lightgrey"}}>
                  27 Comments / Blog Design / Read More
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-cards">
                <div className="blog-cards-image">
                  <img src={images.galleryImages4} className="card-img-top" />
                </div>
                <div className="blog-cards-text">
                  <p className="fw-bold">Latest News about Smarteye</p>
                  <p className="intented">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec
                    hendrerit consectetur adipiscing elit.
                  </p>
                  <small className="" style={{backgroundColor: "lightgrey"}}>
                  27 Comments / Blog Design / Read More
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
