import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EmailVerification() {
  const [isShown, setIsShown] = useState(false);

  const showMultiple = () => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="profileHeader mb-3">
            <h5>E-mail Verification</h5>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="card-text p-3">
                <table className="table requestTable">
                  <thead>
                    <tr>
                      <th scope="col">Reg ID</th>
                      <th scope="col">Details</th>
                      <th scope="col">Action</th>
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
                          View Details
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
                                <h5
                                  className="modal-title"
                                  id="selectDonorLabel"
                                >
                                  Registered
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="bloodDonation">
                                  <div className="card">
                                    <div className="card-body">
                                      <p
                                        className="card-text p-3"
                                        style={{ fontSize: "18px" }}
                                      >
                                        <p>
                                          <div>
                                            <img
                                              className="profileBarDP rounded-circle img-fluid"
                                              src="./images/profile/jacket.jpg"
                                              alt=""
                                            ></img>
                                          </div>
                                        </p>
                                        <p>
                                          <b>Name: </b>Farhan Hassan Jabil
                                        </p>
                                        <p>
                                          <b>Username: </b> farhan_jabil
                                        </p>
                                        <p>
                                          <b>Email: </b>{" "}
                                          farhanhasan295@gmail.com
                                        </p>
                                        <p>
                                          <b>Location: </b>Uttara, Dhaka
                                        </p>
                                        <p>
                                          <b>Password: </b>135792468
                                        </p>
                                        <p>
                                          <b>Phone Number: </b>01641991515
                                        </p>
                                        <p>
                                          <b>Gender: </b>Male
                                        </p>
                                        <p>
                                          <b>Date of Birth </b>15/5/1998
                                        </p>
                                        <p>
                                          <b>Blood Group: </b>O+
                                        </p>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger ms-2"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Reject
                        </button>
                        <div
                          className="modal fade"
                          tabindex="-1"
                          id="confirmCancelModal"
                          aria-labelledby="confirmCancelModal"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Cancel</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <p>You sure you want to reject?</p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Ok
                                </button>
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
                          data-bs-target="#selectDonor"
                        >
                          View Details
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
                                <h5
                                  className="modal-title"
                                  id="selectDonorLabel"
                                >
                                  Registered
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="bloodDonation">
                                  <div className="card">
                                    <div className="card-body">
                                      <p
                                        className="card-text p-3"
                                        style={{ fontSize: "18px" }}
                                      >
                                        <p>
                                          <div>
                                            <img
                                              className="profileBarDP rounded-circle img-fluid"
                                              src="./images/profile/jacket.jpg"
                                              alt=""
                                            ></img>
                                          </div>
                                        </p>
                                        <p>
                                          <b>Name: </b>Farhan Hassan Jabil
                                        </p>
                                        <p>
                                          <b>Username: </b> farhan_jabil
                                        </p>
                                        <p>
                                          <b>Email: </b>{" "}
                                          farhanhasan295@gmail.com
                                        </p>
                                        <p>
                                          <b>Location: </b>Uttara, Dhaka
                                        </p>
                                        <p>
                                          <b>Password: </b>135792468
                                        </p>
                                        <p>
                                          <b>Phone Number: </b>01641991515
                                        </p>
                                        <p>
                                          <b>Gender: </b>Male
                                        </p>
                                        <p>
                                          <b>Date of Birth </b>15/5/1998
                                        </p>
                                        <p>
                                          <b>Blood Group: </b>O+
                                        </p>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger ms-2"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Reject
                        </button>
                        <div
                          className="modal fade"
                          tabindex="-1"
                          id="confirmCancelModal"
                          aria-labelledby="confirmCancelModal"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Cancel</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <p>You sure you want to reject?</p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Ok
                                </button>
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
                          data-bs-target="#selectDonor"
                        >
                          View Details
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
                                <h5
                                  className="modal-title"
                                  id="selectDonorLabel"
                                >
                                  Registered
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="bloodDonation">
                                  <div className="card">
                                    <div className="card-body">
                                      <p
                                        className="card-text p-3"
                                        style={{ fontSize: "18px" }}
                                      >
                                        <p>
                                          <div>
                                            <img
                                              className="profileBarDP rounded-circle img-fluid"
                                              src="./images/profile/jacket.jpg"
                                              alt=""
                                            ></img>
                                          </div>
                                        </p>
                                        <p>
                                          <b>Name: </b>Farhan Hassan Jabil
                                        </p>
                                        <p>
                                          <b>Username: </b> farhan_jabil
                                        </p>
                                        <p>
                                          <b>Email: </b>{" "}
                                          farhanhasan295@gmail.com
                                        </p>
                                        <p>
                                          <b>Location: </b>Uttara, Dhaka
                                        </p>
                                        <p>
                                          <b>Password: </b>135792468
                                        </p>
                                        <p>
                                          <b>Phone Number: </b>01641991515
                                        </p>
                                        <p>
                                          <b>Gender: </b>Male
                                        </p>
                                        <p>
                                          <b>Date of Birth </b>15/5/1998
                                        </p>
                                        <p>
                                          <b>Blood Group: </b>O+
                                        </p>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger ms-2"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Reject
                        </button>
                        <div
                          className="modal fade"
                          tabindex="-1"
                          id="confirmCancelModal"
                          aria-labelledby="confirmCancelModal"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Cancel</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <p>You sure you want to reject?</p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Ok
                                </button>
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
                          data-bs-target="#selectDonor"
                        >
                          View Details
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
                                <h5
                                  className="modal-title"
                                  id="selectDonorLabel"
                                >
                                  Registered
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="bloodDonation">
                                  <div className="card">
                                    <div className="card-body">
                                      <p
                                        className="card-text p-3"
                                        style={{ fontSize: "18px" }}
                                      >
                                        <p>
                                          <div>
                                            <img
                                              className="profileBarDP rounded-circle img-fluid"
                                              src="./images/profile/jacket.jpg"
                                              alt=""
                                            ></img>
                                          </div>
                                        </p>
                                        <p>
                                          <b>Name: </b>Farhan Hassan Jabil
                                        </p>
                                        <p>
                                          <b>Username: </b> farhan_jabil
                                        </p>
                                        <p>
                                          <b>Email: </b>{" "}
                                          farhanhasan295@gmail.com
                                        </p>
                                        <p>
                                          <b>Location: </b>Uttara, Dhaka
                                        </p>
                                        <p>
                                          <b>Password: </b>135792468
                                        </p>
                                        <p>
                                          <b>Phone Number: </b>01641991515
                                        </p>
                                        <p>
                                          <b>Gender: </b>Male
                                        </p>
                                        <p>
                                          <b>Date of Birth </b>15/5/1998
                                        </p>
                                        <p>
                                          <b>Blood Group: </b>O+
                                        </p>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger ms-2"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmCancelModal"
                        >
                          Reject
                        </button>
                        <div
                          className="modal fade"
                          tabindex="-1"
                          id="confirmCancelModal"
                          aria-labelledby="confirmCancelModal"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Cancel</h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <p>You sure you want to reject?</p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
