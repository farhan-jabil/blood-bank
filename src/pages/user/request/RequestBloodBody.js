import React from 'react';
import { Link } from "react-router-dom";

export default function RequestBloodBody() {
    return (
        <>
            <div className="card-body">
                <p className="card-text p-3">
                    <div className="my-3">
                        <label htmlFor="bloodGroup" className="form-label">
                            Blood Group <span className='compulsoryStar'>*</span>
                        </label>
                        <select className="form-select" aria-label="Default select example">
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


                    <div className="my-3">
                        <label htmlFor="bloodBag" className="form-label">
                            How many bag of blood you wanted? <span className='compulsoryStar'>*</span>
                        </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected disabled>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='location' className='form-label'>Enter Location <span className='compulsoryStar'>*</span></label>
                        <div className='input-group'>
                            <input type="text" class="form-control" id="exampleFormControlInput1"></input>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Reason</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                </p>
                <Link to="/requestStatus">
                    <button className="btn btn-danger btn-sm">
                        <i className="fa-sharp fa-solid fa-xmark me-1"></i>
                        Cancel
                    </button>
                </Link>
                {/* <Link to="/requestStatus">
                <button className="btn btn-primary btn-sm ms-2">
                    <i className="fa-sharp fa-solid fa-check me-1"></i>
                    Request
                </button>
                </Link> */}
                <button type="button" className="btn btn-primary btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#confirmCancelModal"><i className="fa-sharp fa-solid fa-check me-1"></i>Request</button>
                <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Request</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p>Confirm for requesting blood ?</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <Link to="/dashboard">
                        <button type="button" className="btn btn-primary">Yes</button>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}
