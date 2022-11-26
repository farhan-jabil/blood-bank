import React from 'react'

export default function AdminDonor() {
  return (
    <>
       <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="BloodBankHeader mb-3">
            <h5>Donors</h5>
          </div>
          <div>
            <div className="card">
              <div className="card-body">
                <p className="card-text bg-white">
                  <div className="row">
                    <div className="col-lg-3 col-sm-12" style={{ textAlign: "center" }}>
                      <span
                        style={{ fontSize: "20px", color: "#DE1F26", fontWeight: "bold" }}>
                        1
                      </span>
                      <br />
                      <span>Unique Donor</span>
                    </div>
                    <div className="col-lg-3 col-sm-12" style={{ textAlign: "center" }}>
                      <span
                        style={{ fontSize: "20px", color: "#DE1F26", fontWeight: "bold" }}>
                        1
                      </span>
                      <br />
                      <span>Life saved</span>
                    </div>
                    <div className="col-lg-3 col-sm-12" style={{ textAlign: "center" }}>
                      <span
                        style={{ fontSize: "20px", color: "#DE1F26", fontWeight: "bold" }}>
                        1
                      </span>
                      <br />
                      <span>Bag Blood Donated</span>
                    </div>
                    <div className="col-lg-3 col-sm-12" style={{ textAlign: "center" }}>
                      <span
                        style={{ fontSize: "20px", color: "#DE1F26", fontWeight: "bold" }}>
                        1
                      </span>
                      <br />
                      <span>Active Donor</span>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="donorSearch card col-lg-3">
                <div className="card-body">
                  <h5 className="card-title">
                    Filters
                    <span>
                      <a href="#">Reset</a>
                    </span>
                  </h5>
                  <div className="card-text bg-white">
                    <div className="form-outline mt-4">
                      <input type="search" id="form1" className="form-control" placeholder="Search by name" />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="customRange1" className="form-label">
                        Set Distance
                      </label>
                      <input type="range" className="form-range" id="distanceRange" min="0" max="500" style={{ display: "inline" }} />
                      <span>2KM<br /><span style={{ fontSize: "10px" }}>Max limit 20KM</span></span>
                    </div>
                    <div className="bloodTypeCheckBox mt-3">
                      <h6>Blood Type</h6>
                      <div className="d-flex">
                        <div className="mt-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="oPositveChecked" />
                            <label className="form-check-label" htmlFor="oPositveChecked">
                              O+
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="aPositveChecked" />
                            <label className="form-check-label" htmlFor="aPositveChecked">
                              A+
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="bPositveChecked" />
                            <label className="form-check-label" htmlFor="bPositveChecked">
                              B+
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="abPositveChecked" />
                            <label className="form-check-label" htmlFor="abPositveChecked">
                              AB+
                            </label>
                          </div>
                        </div>
                        <div className="mt-2 ms-5">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="oNegativeChecked" />
                            <label className="form-check-label" htmlFor="oNegativeChecked">
                              O-
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="aNegativeChecked" />
                            <label className="form-check-label" htmlFor="aNegativeChecked">
                              A-
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="bNegativeChecked" />
                            <label className="form-check-label" htmlFor="bNegativeChecked">
                              B-
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="abNegativeChecked" />
                            <label className="form-check-label" htmlFor="abNegativeChecked">
                              AB-
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="donorType mt-4">
                      <h6>Donor Type</h6>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="activeChecked" />
                        <label className="form-check-label" htmlFor="activeChecked">
                          Active
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="activeChecked" />
                        <label className="form-check-label" htmlFor="activeChecked">
                          Inactive
                        </label>
                      </div>
                    </div>
                    <div className="donorAge mt-4">
                      <h6>Donor Age</h6>
                      <div className="d-flex mt-1">
                        <div className="input-group mb-3">
                          <input type="text" className="" placeholder="Min" aria-label="Username" aria-describedby="basic-addon1" style={{ display: "inline", width: "60px" }} />
                        </div>
                        <div className="input-group mb-3">
                          <input type="text" className="" placeholder="Max" aria-label="Username" aria-describedby="basic-addon1" style={{ display: "inline-block", width: "60px" }} />
                        </div>
                        <></>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="donorTable card col-lg-8">
                <div className="card-body">
                  <p className="card-text  text-left">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Blood Type</th>
                          <th scope="col">Age</th>
                          <th scope="col">Last Donation</th>
                          <th scope="col">Total Donation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                        <tr>
                          <td>Farhan Hassan Jabil</td>
                          <td>O+</td>
                          <td>24</td>
                          <td>3/10/2022</td>
                          <td>5 times</td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
