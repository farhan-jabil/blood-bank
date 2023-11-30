import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <form>
        <div className="form-outline mt-5 mb-4">
          <input
            type="email"
            id="loginName"
            className="form-control"
          />
          <label className="form-label" htmlFor="loginName">
            Email or username
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
          />
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
        </div>
        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
              <label
                className="form-check-label"
                htmlFor="loginCheck"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* <Link to="/dashboard">
          <button type="submit" className="btn btn-danger form-control mb-4" style={{ backgroundColor: "#DE1F26" }}>
            Sign in
          </button>
        </Link> */}
        <div className="signInTypes mb-5">
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
                    to="/dashboard"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    Login as user
                  </Link>
                </li>
                <li className="nav-item mx-2" role="presentation">
                  <Link
                    className="nav-link active"
                    id="tab-register"
                    data-mdb-toggle="pill"
                    to="/adminDashboard"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    Login as admin
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
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center">
          <p>
            Not a member? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </>
  );
}
