import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SignInUp({children}) {
    const {pathname} = useLocation();
  return (
    <>
     <div className="container mt-5">
        <Link to="/">
          <i
            className="fa-sharp fa-solid fa-house fa-2x p-2 bg-primary text-white rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Go back to home"
          ></i>
        </Link>
        <div className="signInUpBody bg-light border rounded-5 mb-5">
          <section className="w-100 p-4 d-flex justify-content-center">
            <div style={{ width: "26rem" }}>
              <ul
                className="nav nav-pills nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item mx-2" role="presentation">
                  <Link
                    className="nav-link active"
                    id="tab-login"
                    data-mdb-toggle="pill"
                    to="/login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                    style={{ backgroundColor: pathname === "/login" ? "#DE1F26" :  "#F8F9FA", color: pathname === "/login" ? "white" : "#DE1F26"}}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-2" role="presentation">
                  <Link
                    className="nav-link active"
                    id="tab-register"
                    data-mdb-toggle="pill"
                    to="/signup"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                    style={{ backgroundColor: pathname === "/signup" ? "#DE1F26" :  "#F8F9FA", color: pathname === "/signup" ? "white" : "#DE1F26"}}
                  >
                    Register
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  {children}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> 
    </>
  )
}
