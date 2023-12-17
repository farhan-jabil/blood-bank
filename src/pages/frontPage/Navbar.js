import React from "react";
import { images } from "../../utils/demo_images";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbarr(props) {
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
                <a className="nav-link text-grey " href="#process">
                  Process
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-grey " href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-grey" href="#footer">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </nav>
      </div>
      {/* <div className="bottomNav">
        <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
          <Container className="bg-danger">
            <Navbar.Brand>
              <div className="logoImg bg-secondary">
                <img src={images.logo} alt="" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className=""
            >
              <Nav className="bottomNavRight me-0 bg-primary">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> */}
    </>
  );
}
