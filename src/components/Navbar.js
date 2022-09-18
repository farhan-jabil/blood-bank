import React from "react";

export default function Navbar(props) {
  return (
    // style={{backgroundColor: props.navColor.backgroundColor === "#DE1F26"?"#DE1F26":"black", color: "white"}}
    <>
      <div className={`${props.navColor.backgroundColor === "#DE1F26" ? "topNav" : "topNavDark"}`}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid ">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="topNavLeft navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <small>
                    <i className="fa-regular fa-envelope"></i>
                  </small>
                  <span className="ms-2">contact@solutya.com</span>
                  <span className="mx-3">
                    <b>|</b>
                  </span>
                </li>
                <li className="nav-item">
                  <small>
                    <i className="fa-regular fa-clock"></i>
                  </small>
                  <span className="ms-2">Service Time : 12 AM</span>
                </li>
              </ul>
              <ul className="rightNavLeft navbar-nav me-auto mb-2 mb-lg-0 ms-2">
                <li className="nav-item">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                  <small>
                    <span className="ms-3">Uplaod Video</span>
                  </small>
                  <span className="mx-3">
                    <b>|</b>
                  </span>
                </li>
                <li className="nav-item">
                  <small>
                    <i className="fa-solid fa-user"></i>
                  </small>
                  <span className="ms-3">Login</span>
                </li>
                <li className="nav-item">
                    <i
                      className={`fa-solid fa-circle${props.navColor.backgroundColor === "#DE1F26"? "-half-stroke": " "} ms-3`}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={`Enable ${
                        props.navColor.backgroundColor === "#DE1F26"
                          ? "Dark"
                          : "Light"
                      } mode`}
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={props.toggleMode}
                    ></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={`${props.navColor.backgroundColor === "#DE1F26" ? "bottomNav":"bottomNavDark"}`}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="logoImg">
              <img
                src="images/logo/logo.jpg"
                alt=""
                height={"60px"}
                width={"300px"}
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse pt-1"
              id="navbarSupportedContent"
            >
              <ul className="bottomNavRight navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link text-${props.navColor.backgroundColor === "black"?"white":""} active`} aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item ms-5">
                  <a className={`nav-link text-${props.navColor.backgroundColor === "black"?"white":""}`} href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item ms-5">
                  <a className={`nav-link text-${props.navColor.backgroundColor === "black"?"white":""}`} href="#">
                    Gallery
                  </a>
                </li>
                {/* <li className="nav-item ms-5">
                  <a className={`nav-link text-${props.navColor.backgroundColor === "black"?"white":""}`} href="#">
                    Process
                  </a>
                </li>
                <li className="nav-item ms-5">
                  <a className={`nav-link text-${props.navColor.backgroundColor === "black"?"white":""}`} href="#">
                    Blog
                  </a>
                </li> */}
                <li className="nav-item ms-5">
                  <a className={`nav-link text-${props.navColor.backgroundColor === "black"?"white":""}`} href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
