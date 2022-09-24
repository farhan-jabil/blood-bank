import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
        <div className='container mt-5'>
        <Link to="/"><i class="fa-sharp fa-solid fa-house fa-2x p-2 bg-primary text-white rounded-circle" data-bs-toggle="tooltip"
                      data-bs-placement="top" title='Go back to home'></i></Link>
        <div className='bg-light border rounded-5 w-50' style={{marginLeft : "300px"}}>
            <section className='w-100 p-4 d-flex justify-content-center p-4'>
                <div style={{width: "26rem"}}>
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item mx-2" role="presentation">
    <Link className="nav-link" id="tab-login" data-mdb-toggle="pill" to="/login" role="tab"
      aria-controls="pills-login" aria-selected="true" style={{color: "#DE1F26"}}>Login</Link>
  </li>
  <li className="nav-item mx-2" role="presentation">
    <Link className="nav-link active" id="tab-register" data-mdb-toggle="pill" to="/signup" role="tab"
      aria-controls="pills-register" aria-selected="false" style={{backgroundColor: "#DE1F26"}}>Register</Link>
  </li>
</ul>
<div className='tab-content'>
     <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div className="form-outline mt-5 mb-4">
      <label className="form-label" htmlFor="registerName">Name</label>
        <input type="text" id="registerName" className="form-control" />
      </div>

      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="registerUsername">Username</label>
        <input type="text" id="registerUsername" className="form-control" />
      </div>
      
      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="registerEmail">Email</label>
        <input type="email" id="registerEmail" className="form-control" />
      </div>

      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="registerPassword">Password</label>
        <input type="password" id="registerPassword" className="form-control" />
      </div>

      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
        <input type="password" id="registerRepeatPassword" className="form-control" />
      </div>

      <select className="form-select my-5" aria-label="Default select example">
  <option selected disabled>Select you blood group</option>
  <option value="1">O+</option>
  <option value="2">O-</option>
  <option value="3">A+</option>
  <option value="4">A-</option>
  <option value="5">B+</option>
  <option value="6">B-</option>
  <option value="7">AB+</option>
  <option value="8">AB-</option>
</select>

      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label className="form-check-label" htmlFor="registerCheck">
          I have read and agree to the terms
        </label>
      </div>
      <button type="submit" className="btn btn-danger form-control mb-4" style={{backgroundColor : "#DE1F26"}}>Sign Up</button>
    </form>
  </div>
        </div> 
                </div>
            </section>
        </div>
      
</div>
    </>
  )
}
