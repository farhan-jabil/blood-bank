import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <form>
        <div className="form-outline mt-4 my-3">
          <label className="form-label" htmlFor="registerName">
            Name <span className='compulsoryStar'>*</span>
          </label>
          <input
            type="text"
            id="registerName"
            className="form-control"
          />
        </div>

        <div className="form-outline my-3">
          <label className="form-label" htmlFor="registerUsername">
            Username <span className='compulsoryStar'>*</span>
          </label>
          <input
            type="text"
            id="registerUsername"
            className="form-control"
          />
        </div>

        <div className="form-outline my-3">
          <label className="form-label" htmlFor="registerEmail">
            Email <span className='compulsoryStar'>*</span>
          </label>
          <input
            type="email"
            id="registerEmail"
            className="form-control"
          />
        </div>

        <div className="form-outline my-3">
          <label className="form-label" htmlFor="registerLocation">
            Location <span className='compulsoryStar'>*</span>
          </label>
          <input
            type="name"
            id="registerLocation"
            className="form-control"
          />
        </div>

        <div className="form-outline my-3">
          <label className="form-label" htmlFor="registerPassword">
            Password <span className='compulsoryStar'>*</span>
          </label>
          <input
            type="password"
            id="registerPassword"
            className="form-control"
          />
        </div>

        <div className="form-outline my-3">
          <label
            className="form-label"
            htmlFor="registerRepeatPassword"
          >
            Repeat password <span className='compulsoryStar'>*</span>
          </label>
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
          />
        </div>

        <div className="form-outline my-3">
          <label className="form-label" htmlFor="registerPhone">
            Phone Number <span className='compulsoryStar'>*</span>
          </label>
          <input type="number" id="registerPhone" className="form-control" />
        </div>

        <div className="form-outline my-3">
          <div className="mb-2" htmlFor="form-label">
            Gender <span className='compulsoryStar'>*</span>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
          </div>
        </div>


        {/* <div className="form-outline my-3">
          <label className="form-label" htmlFor="registerDOB">
            Enter Date of Birth <span className='compulsoryStar'>*</span>
          </label>
          <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </div> */}


        <div className="my-3">
          <label htmlFor="profilePicture" className="form-label">
            Upload picture <span className='compulsoryStar'>*</span>
          </label>
          <input
            type="file"
            className="form-control"
            id="profilePicture"
          />
        </div>

        <div className="my-3">
          <label htmlFor="bloodGroup" className="form-label">
            Blood Group <span className='compulsoryStar'>*</span>
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={'DEFAULT'}
          >
            <option value="DEFAULT" disabled>
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


        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
          />
          <label
            className="form-check-label"
            htmlFor="registerCheck"
          >
            I have read and agree to the terms
          </label>
        </div>
        <Link to="/login">
          <button
            type="submit"
            className="btn btn-danger form-control mb-4"
            style={{ backgroundColor: "#DE1F26" }}
          >
            Sign Up
          </button>
        </Link>
      </form>
    </>
  );
}
