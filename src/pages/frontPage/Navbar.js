import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../utils/demo_images";

export default function Navbar(props) {
  return (
    <>
      <div className="topNav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <ul className="topNavLeft navbar-nav">
              <li className="nav-item">
                <small>
                  <i className="fa-regular fa-envelope"></i>
                </small>
                <span className="ms-2">Email</span>
                <span className="mx-3">
                  <b className="forPC">|</b>
                </span>
              </li>
              <li className="nav-item">
                <small>
                  <i className="fa-regular fa-clock"></i>
                </small>
                <span className="ms-2">Service Time : 24 hours</span>
              </li>
            </ul>
            <ul className="rightNavLeft navbar-nav">
              <li className="nav-item">
                <small>
                  <i className="fa-solid fa-user"></i>
                </small>
                <span className="ms-2">
                  <Link to="/login" style={{ color: "white" }}>
                    Login
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="bottomNav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="logoImg">
              <img src={images.logo} alt="" />
            </div>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse pt-1" id="navbarSupportedContent"> */}
            <ul className="bottomNavRight navbar-nav mb-2">
              <li className="nav-item ms-5">
                <a
                  className="nav-link text-black active"
                  aria-current="page"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-grey " href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-grey " href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-grey" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </nav>
      </div>
    </>
  );
}
