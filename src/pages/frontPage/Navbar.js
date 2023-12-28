import React, { useState, useEffect } from "react";
import { images } from "../../utils/demo_images";
import { Link as ScrollLink } from "react-scroll";

export default function Navbarr(props) {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

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
                <span className="ms-2">sales@smarteyeapps.com</span>
                <span className="mx-4">
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
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                </small>
                <span className="ms-2">Upload Video</span>
                <span className="mx-4">
                  <b className="forPC">|</b>
                </span>
              </li>
              <li className="nav-item">
                <small>
                  <i className="fa-solid fa-user"></i>
                </small>
                <span className="ms-2">Login</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="bottomNav">
        <nav className={`navbar navbar-expand-lg bg-white navbar-light`}>
          <div className="container">
            <div className="logoImg">
              <img src={images.logo} alt="" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end ${navbarOpen ? "show" : ""}`}
            >
              <ul className="bottomNavRight navbar-nav align-items-center navList">
                <li className="nav-item navItems ms-5">
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item navItems ms-5">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    About Us
                  </ScrollLink>
                </li>
                <li className="nav-item navItems ms-5">
                  <ScrollLink
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Gallery
                  </ScrollLink>
                </li>
                <li className="nav-item navItems ms-5">
                  <ScrollLink
                    to="process"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Process
                  </ScrollLink>
                </li>
                <li className="nav-item navItems ms-5">
                  <ScrollLink
                    to="blog"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Blog
                  </ScrollLink>
                </li>
                <li className="nav-item navItems ms-5">
                  <ScrollLink
                    to="footer"
                    smooth={true}
                    duration={500}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Contact Us
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
