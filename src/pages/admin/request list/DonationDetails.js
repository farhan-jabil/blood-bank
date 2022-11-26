import React from "react";
import { Link } from "react-router-dom";

export default function DonationDetails() {
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="bloodDonation mb-3">
            <h5>Donation Details</h5>
          </div>
          <div className="bloodDonation">
            <div className="card">
              <div className="card-body">
                <p className="card-text p-3" style={{ fontSize: "18px" }}>
                  <p>
                    <b>Number of Donors: </b>3
                  </p>
                  <p>
                    <b>Donor Name: </b>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#selectDonor"
                    >
                      View
                    </button>
                    <div
                      className="modal fade"
                      id="selectDonor"
                      tabIndex="-1"
                      aria-labelledby="selectDonorLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="selectDonorLabel">
                                Donors List
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
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Blood Group</th>
                                  </tr>

                                </thead>
                                <tbody>

                                  <tr>
                                    <th scope="row">1</th>
                                    <td>
                                      <Link to="/usersProfile" target="_blank">
                                        Farhan Hassan Jabil
                                      </Link>
                                    </td>
                                    <td>O+</td>
                                  </tr>

                                  <tr>
                                    <th scope="row">2</th>
                                    <td>
                                      <Link to="/usersProfile" target="_blank">
                                        Farhan Hassan Jabil
                                      </Link>
                                    </td>
                                    <td>O+</td>
                                  </tr>

                                  <tr>
                                    <th scope="row">3</th>
                                    <td>
                                      <Link to="/usersProfile" target="_blank">
                                        Farhan Hassan Jabil
                                      </Link>
                                    </td>
                                    <td>O+</td>
                                  </tr>
                                </tbody>
                              </table>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                  <p>
                    <b>Recepient Name: </b>
                    <Link to="/adminUsersProfile">Farhan Hassan Jabil</Link>
                  </p>
                  <p>
                    <b>Status: </b>Donation Complete
                  </p>
                  <p>
                    <b>Donation Time: </b>13 Minutes ago
                  </p>
                  <p>
                    <b>Donation Day: </b>Today
                  </p>
                  <p>
                    <b>Donors who reuested for: </b>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#selectDonor"
                    >
                      View
                    </button>
                    <div
                      className="modal fade"
                      id="selectDonor"
                      tabIndex="-1"
                      aria-labelledby="selectDonorLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="selectDonorLabel">
                                Donors List
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
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Status</th>
                                  </tr>

                                </thead>
                                <tbody>

                                  <tr>
                                    <th scope="row">1</th>
                                    <td>
                                      <Link to="/usersProfile" target="_blank">
                                        Farhan Hassan Jabil
                                      </Link>
                                    </td>
                                    <td>O+</td>
                                    <td>
                                      Selected
                                    </td>
                                  </tr>

                                  <tr>
                                    <th scope="row">2</th>
                                    <td>
                                      <Link to="/usersProfile" target="_blank">
                                        Farhan Hassan Jabil
                                      </Link>
                                    </td>
                                    <td>O+</td>
                                    <td>
                                      Not Selected
                                    </td>
                                  </tr>

                                  <tr>
                                    <th scope="row">3</th>
                                    <td>
                                      <Link to="/usersProfile" target="_blank">
                                        Farhan Hassan Jabil
                                      </Link>
                                    </td>
                                    <td>O+</td>
                                    <td>
                                      Selected
                                    </td>
                                  </tr> 

                                  <tr>
                                    <th scope="row">4</th>
                                    <td>
                                      <Link to="/usersProfile" target="_blank">
                                        Farhan Hassan Jabil
                                      </Link>
                                    </td>
                                    <td>O+</td>
                                    <td>
                                      Selected
                                    </td>
                                  </tr>

                                </tbody>
                              </table>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                  <p>
                    <b>Blood Type: </b>O+
                  </p>
                  <p>
                    <b>Bags: </b>3
                  </p>
                  <p>
                    <b>Donated Location: </b>Lab One Blood Bank
                  </p>
                  <p>
                    <b>Contact Number: </b>01641991515
                  </p>
                  <p>
                    <b>Reason: </b>Accident
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
