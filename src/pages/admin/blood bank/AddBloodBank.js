import React from 'react';
import { Link } from "react-router-dom";

export default function AddBloodBank() {
  return (
    <>
      <div className='siteLayoutMainBody'>
        <div className='siteLayoutBody my-3'>
          <div className="bloodBankHeader d-flex mb-3">
            <h5>Add Blood Bank</h5>
          </div>
          <div className="bloodBankInformation">
            <div className="card">
            <div className="card-body">
                <p className="card-text p-3">
                    <div className="my-3">
                        <div className="form-outline">
                        <label htmlFor="bloodGroup" className="form-label">
                            Blood Bank Name <span className='compulsoryStar'>*</span>
                        </label>
                            <input type="text" id="bloodBankName" className="form-control"/>
                        </div>
                    </div>

                    <div className="my-3">
                        <div className="form-outline">
                        <label htmlFor="bloodBankCity" className="form-label">
                            Enter City Name <span className='compulsoryStar'>*</span>
                        </label>
                        <div className='d-flex'>
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Select District</option>
                            <option value="1">Dhaka</option>
                            <option value="2">Tangail</option>
                        </select>
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Select City</option>
                            <option value="1">Uttara</option>
                            <option value="2">Gulshan</option>
                            <option value="3">Dhanmondi</option>
                        </select>
                        </div>
                        
                        </div>
                    </div>

                    <div className="my-3">
                        <div className="form-outline">
                        <label htmlFor="bloodBankPhone" className="form-label">
                            Blood Bank Phone <span className='compulsoryStar'>*</span>
                        </label>
                            <input type="number" id="bloodBankPhone" className="form-control"/>
                        </div>
                    </div>

                    <div className="my-3">
                        <div className="form-outline">
                        <label htmlFor="bloodBankLocation" className="form-label">
                            Enter Blood Bank Location Link (via google map) <span className='compulsoryStar'>*</span>
                        </label>
                            <input type="text" id="bloodBankLocation" className="form-control"/>
                        </div>
                    </div>
                </p>
                <Link to="/adminBloodBank">
                    <button className="btn btn-danger btn-sm">
                        <i className="fa-sharp fa-solid fa-xmark me-1"></i>
                        Cancel
                    </button>
                </Link>
                <button type="button" className="btn btn-primary btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#confirmCancelModal"><i className="fa-sharp fa-solid fa-check me-1"></i>Request</button>
                <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Confirm</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p>Confirm for adding this blood bank ?</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <Link to="/adminBloodBank">
                        <button type="button" className="btn btn-primary">Yes</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
