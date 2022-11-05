import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/dashboard">
          <button
            type="submit"
            className="btn btn-danger form-control mb-4"
            style={{ backgroundColor: "#DE1F26" }}
          >
            Sign in
          </button>
        </Link>
        <div className="text-center">
          <p>
            Not a member? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </>
  );
}
