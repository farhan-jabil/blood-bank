import React from 'react';
import { Link } from "react-router-dom";

export default function EmergencyRequest() {
  return (
    <>
      <div container mt-5>
        <div className="emergencyBloodRequest bg-light border rounded-3 p-3 d-block m-auto my-5">
          <h5>Emergency Blood Request</h5>
          <form>
            <div className="form-outline mt-4 mb-2">
              <label className="form-label" htmlFor="requestName">
                Enter your name <span className='compulsoryStar'>*</span>
              </label>
              <input
                type="text"
                id="requestName"
                className="form-control"
              />
            </div>

            <div className="my-3">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group <span className='compulsoryStar'>*</span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Select your blood group
                </option>
                <option value="1">O+</option>
                <option value="2">O-</option>
                <option value="3">A+</option>
                <option value="4">A-</option>
                <option value="5">B+</option>
                <option value="6">B-</option>
                <option value="7">AB+</option>
                <option value="8">AB-</option>
              </select>
            </div>

            <div className="form-outline mb-2">
              <label
                className="form-label"
                htmlFor="registerPhone"
              >
                Phone Number <span className='compulsoryStar'>*</span>
              </label>
              <input
                type="number"
                id="registerPhone"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="requestDetails">
                Reason
              </label>
              <textarea
                type="name"
                className="form-control"
                id="details"
              />
            </div>

            <div className='emergencyButton mt-3'>
              <Link to="/">
                <button className="btn btn-danger btn-sm">
                  <i className="fa-sharp fa-solid fa-xmark me-1"></i>
                  Cancel
                </button>
              </Link>
              <button className="btn btn-primary btn-sm ms-2">
                <i className="fa-sharp fa-solid fa-check me-1"></i>
                Request
              </button>
            </div>
            <div className='warning mt-3'>
              <p><i><small><span style={{color: "red"}}>Warning: </span>You can request for emergency blood once with one phone number. You have to create account for next time. Click <Link to="/signup"><span className='fw-bolder'>here</span></Link> to create account</small></i></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
