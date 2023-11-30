import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function RequestStatus() {

  const [isShown, setIsShown] = useState(false);

  const showMultiple = () => {
    setIsShown(current => !current)
  }

  return (
    <>
      <div className="card-body">
        <p className="card-text p-3">
          <table className="table requestTable">
            <thead>
              <tr>
                <th scope="col">Request ID</th>
                <th scope="col">Donors</th>
                <th scope="col">Status</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#selectDonor"
                  >
                    View
                  </button>
                  <div className="modal fade" id="selectDonor" tabIndex="-1" aria-labelledby="selectDonorLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="selectDonorLabel">
                            People who wants to donate you <i className="fa-regular fa-face-smile"></i>
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div>
                              <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" onClick={showMultiple}/>
                              <label className="form-check-label" for="flexCheckDefault">
                                Select Multiple donor
                              </label>
                            </div>
                            <table className="table">
                              <thead>
                                <tr>
                                <th style={{display: isShown ? 'block' : 'none'}} scope="col">Select</th>
                                  <th scope='col'>#</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Blood Group</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{display: isShown ? 'block' : 'none', }}>
                                      <input className="form-check-input"  type="checkbox" value="" id="flexCheckDefault" style={{margin: "0px 0px 30px 0px"}}/>
                                  </td>
                                  <th scope="row">1</th>
                                  <td>
                                    <Link to="/usersProfile" target="_blank">Farhan Hassan Jabil</Link>
                                  </td>
                                  <td>O+</td>
                                  <td>
                                    <button style={{display: isShown ? 'none' : 'inline'}} className='bg-success text-white'>
                                      <i className="fa-sharp fa-solid fa-check"></i>
                                    </button>
                                    <button className='bg-danger text-white ms-3'>
                                      <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{display: isShown ? 'block' : 'none'}}>
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{margin: "0px 0px 30px 0px"}}/>
                                  </td>
                                  <th scope="row">2</th>
                                  <td>
                                    <Link to="/usersProfile" target="_blank">Farhan Hassan Jabil</Link>
                                  </td>
                                  <td>O+</td>
                                  <td>
                                    <button style={{display: isShown ? 'none' : 'inline'}} className='bg-success text-white'>
                                      <i className="fa-sharp fa-solid fa-check"></i>
                                    </button>
                                    <button className='bg-danger text-white ms-3'>
                                      <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{display: isShown ? 'block' : 'none'}}>
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{margin: "0px 0px 30px 0px"}}/>
                                  </td>
                                  <th scope="row">3</th>
                                  <td>
                                    <Link to="/usersProfile" target="_blank">Farhan Hassan Jabil</Link>
                                  </td>
                                  <td>O+</td>
                                  <td>
                                    <button style={{display: isShown ? 'none' : 'inline'}} className='bg-success text-white'>
                                      <i className="fa-sharp fa-solid fa-check"></i>
                                    </button>
                                    <button className='bg-danger text-white ms-3'>
                                      <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div  style={{display: isShown ? 'block' : 'none'}}>
                            <button type="button" className="btn btn-outline-primary d-block m-auto" >Confirm</button>
                            </div>
                            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td><span className='text-secondary'>Select your donor</span></td>
                <td>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmCancelModal">Cancel</button>
                  <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Cancel</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>You sure you want to cancel?</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-danger">Ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#002</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#selectedModal"
                  >
                    View
                  </button>
                  <div
                    className="modal fade"
                    id="selectedModal"
                    tabIndex="-1"
                    aria-labelledby="selectedModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="selectedModalLabel">
                            People who wants to donate you <i className="fa-regular fa-face-smile"></i>
                          </h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            Your <Link to="/usersProfile" target="_blank">Donor</Link> has been seleted. If your donation is complete, click on <span className='text-success'>Done</span>. If you want cancel or want to select another donor, click on <span className='text-secondary'>Cancel</span>.
                            <div className="modal-footer d-block mt-2">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                              <button type="button" className="btn btn-success ms-2">Done</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td><span className='text-primary'>Donor Selected</span></td>
                <td>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmCancelModal">Cancel</button>
                  <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Cancel</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>You sure you want to cancel?</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-danger">Ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#003</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#donationDone"
                  >
                    View
                  </button>
                  <div
                    className="modal fade"
                    id="donationDone"
                    tabIndex="-1"
                    aria-labelledby="donationDoneLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="donationDoneLabel">
                            People who wants to donate you <i className="fa-regular fa-face-smile"></i>
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            Your Donation has been completed <i className="fa-solid fa-face-grin-wide"></i>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td><span className='text-success'>Donation Done</span></td>
                <td>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmCancelModal">Cancel</button>
                  <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Cancel</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>You sure you want to cancel?</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-danger">Ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#004</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    View
                  </button>
                  <div
                    className="modal fade"
                    id="deleteModal"
                    tabIndex="-1"
                    aria-labelledby="deleteModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="deleteModalLabel">
                            People who wants to donate you <i className="fa-regular fa-face-smile"></i>
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            Your Request has been canceled <i className="fa-regular fa-face-frown"></i>
                          </form>
                        </div>

                      </div>
                    </div>
                  </div>
                </td>
                <td><span className='text-danger'>Cancel</span></td>
                <td>
                  <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmCancelModal">Cancel</button>
                  <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Cancel</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>You sure you want to cancel?</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-danger">Ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        {/* <Link to="/dashboard">
                        <button className="btn btn-danger btn-sm">
                            <i className="fa-sharp fa-solid fa-xmark me-1"></i>
                            Cancel
                        </button>
                    </Link>
                    <button className="btn btn-primary btn-sm ms-2">
                        <i className="fa-sharp fa-solid fa-check me-1"></i>
                        Request
                    </button> */}
      </div>
    </>
  )
}
