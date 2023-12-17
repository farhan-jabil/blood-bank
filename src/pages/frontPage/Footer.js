import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="container footer-info">
          <div className="row">
            <div className="footer-quick-links col-lg-3">
              <div className="footer-informints">
                <h4>
                  <b>Contact Informints</b>
                </h4>
                <div className="footer-informints-list">
                  <div className="footer-informints-data">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <div>
                      46-29 Indra Street, Southernbank, Tigaione, Toranto, 3006
                      Canada
                    </div>
                  </div>
                  <div className="footer-informints-data">
                    <i className="fa-regular fa-envelope"></i>
                    <div>
                      sales@smarteyeapps.com <br /> support@smarteyeapps.com
                    </div>
                  </div>
                  <div className="footer-informints-data">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <div>
                      +91 9751791203 <br /> +91 9159669599
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="quick-links-products col-lg-3">
              <div className="quick-links">
                <h4>
                  <b>Quick Links</b>
                </h4>
                <div className="quick-links-list row">
                  <ul className="col-lg-6">
                    <li>
                      <div>Home</div>
                    </li>
                    <li>
                      <div>Contacts</div>
                    </li>
                    <li>
                      <div>Gallery</div>
                    </li>
                  </ul>
                  <ul className="col-lg-6">
                    <li>
                      <div>About Us</div>
                    </li>
                    <li>
                      <div>Pricing</div>
                    </li>
                    <li>
                      <div>Features</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="products mt-3">
                <h4>
                  <b>More Products</b>
                </h4>
                <div className="products-list row">
                  <ul className="col-lg-6">
                    <li>
                      <div>Forum PHP Script</div>
                    </li>
                    <li>
                      <div>Smart Event</div>
                    </li>
                  </ul>
                  <ul className="col-lg-6">
                    <li>
                      <div>Edu Smart</div>
                    </li>
                    <li>
                      <div>Smart School</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="quick-msg col-lg-4">
              <div className="card">
                <h3
                  className="bg-light"
                  style={{ textAlign: "center", padding: "20px 0" }}
                >
                  Quick Message
                </h3>
                <div className="card-body">
                  <div
                    className="card-text"
                    style={{ backgroundColor: "white" }}
                  >
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
      </div>
    </>
  );
}
