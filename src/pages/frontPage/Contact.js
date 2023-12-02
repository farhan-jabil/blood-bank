import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-info">
          <div className="contact-quick-links">
            <div className="contact-informints">
              <h4>
                <b>Contact Informints</b>
              </h4>
              <div className="contact-informints-list">
                <div className="contact-informints-data">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  <div>Dhaka-1230, Bangladesh</div>
                </div>
                <div className="contact-informints-data">
                  <i className="fa-regular fa-envelope"></i>
                  <div>bloodbank@gmaill.com</div>
                </div>
                <div className="contact-informints-data">
                  <i className="fa-sharp fa-solid fa-phone"></i>
                  <div>+88 01641991515</div>
                </div>
              </div>
            </div>
            <div className="quick-links-products">
              <div className="quick-links">
                <h4>
                  <b>Quick Links</b>
                </h4>
                <div className="quick-links-list">
                  <div>
                    <a className="text-white" aria-current="page" href="#hero">
                      Home
                    </a>
                  </div>
                  <div>
                    <a className="text-white" aria-current="page" href="#about">
                      About Us
                    </a>
                  </div>
                  <div>
                    <a className="text-white" aria-current="page" href="#gallery">
                      Gallery
                    </a>
                  </div>
                  <div>
                    <a className="text-white" aria-current="page" href="#contact">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="products mt-3">
                <h4><b>More Products</b></h4>
                <div className="products-list d-flex">
                  <div className="products-list-1">
                    <span>Forum PHP Script</span>
                    <br />
                    <span>Smart Event</span>
                    <br />
                  </div>
                  <div className="products-list-2">
                    <span>Edu Smart</span>
                    <br />
                    <span>Smart School</span>
                    <br />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="quick-msg">
            <div className="card">
              <h3
                className="bg-light"
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                Quick Message
              </h3>
              <div className="card-body">
                <div className="card-text" style={{ backgroundColor: "white" }}>
                  <form>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Mobile no"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your Message"
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="btn form-control"
                        style={{ backgroundColor: "#DE1F26", color: "white" }}
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
