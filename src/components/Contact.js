import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-info">
          <div className="contact-informints">
            <h4><b>Contact Informints</b></h4>
            <div className="contact-infomints-data">
              <i className="fa-sharp fa-solid fa-location-dot pt-3"></i>
              <p>
                Sonargaon Janapath, Uttara <br /> Dhaka-1230, Bangladesh
              </p>
            </div>
            <div className="contact-infomints-data">
              <i className="fa-regular fa-envelope"></i>
              <p>contact@solutya</p>
            </div>
            <div className="contact-infomints-data">
              <i className="fa-sharp fa-solid fa-phone pt-3"></i>
              <p>
                +88 01611-66-4965
                <br />
                +88 01911-66-4965
              </p>
            </div>
          </div>
          <div className="quick-links-products">
            <div className="quick-links">
              <h4><b>Quick Links</b></h4>
              <div className="quick-links-list">
                <div className="quick-links-1">
                  <span>Home</span>
                  <br />
                  <span>Contacts</span>
                  <br />
                  <span>Gallery</span>
                  <br />
                </div>
                <div className="quick-links-2">
                  <span>About Us</span>
                  <br />
                  <span>Pricing</span>
                  <br />
                  <span>Features</span>
                  <br />
                </div>
              </div>
            </div>
            <div className="products mt-3">
              <h4><b>More Products</b></h4>
              <div className="products-list">
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
            </div>
          </div>
          <div className="quick-msg">
            <div
              className="card"
              style={{ color: "black", height: "400px", width: "25rem", boxShadow: "0 0 4px grey"}}
            >
              <h3
                className="bg-light"
                style={{ textAlign: "center", padding: "20px 0" }}
              >
                Quick Message
              </h3>
              <div className="card-body">
                <p className="card-text">
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
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright mt-5">
        <hr/>
        <div className="copyright-reserved">
        Copyright <i className="fa-regular fa-copyright"></i> <a href="https://solutya.com/" style={{color: "grey", fontSize: "20px"}} target="blank">Solutya.com</a> | All rights reserved.
        </div>
        <div className="social-links">
        </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
