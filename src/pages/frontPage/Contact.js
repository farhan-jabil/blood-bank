import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-info">
          <div className="contact-quick-links">
            <div className="contact-informints">
              <h4><b>Contact Informints</b></h4>
              <div className="contact-infomints-data d-flex">
                <i className="fa-sharp fa-solid fa-location-dot pt-3"></i>
                <div>
                  Sonargaon Janapath, Uttara <br /> Dhaka-1230, Bangladesh
                </div>
              </div>
              <div className="contact-infomints-data">
                <i className="fa-regular fa-envelope"></i>
                <div>contact@solutya</div>
              </div>
              <div className="contact-infomints-data d-flex">
                <i className="fa-sharp fa-solid fa-phone pt-3"></i>
                <div>+88 01611-66-4965<br />+88 01911-66-4965</div>
              </div>
            </div>
            <div className="quick-links-products">
              <div className="quick-links">
                <h4><b>Quick Links</b></h4>
                <div className="quick-links-list d-flex">
                  <div className="quick-links-1">
                    <span>Hero</span>
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
              </div>
            </div>
          </div>
          <div className="quick-msg">
            <div className="card" >
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
