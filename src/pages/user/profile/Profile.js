import React ,{useState} from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Profile() {

  
  const [startDate, setStartDate] = useState(new Date());

  const data = [
    { name: "Plasma", value: 35 },
    { name: "White blood cell", value: 14 },
    { name: "Red blood cell", value: 24 },
    { name: "Plateles", value: 16 },
    { name: "Others", value: 11 },
  ];

  // const [status, setStatus] = useState({
  //   height: "6px",
  //   width: "6px",
  //   backgroundColor: "#DE1F26",
  //   borderRadius: "25px",
  //   position: "relative",
  //   top: "18px",
  //   right: "6px"
  // });
  const status = {
    height: "6px",
    width: "6px",
    backgroundColor: "#DE1F26",
    borderRadius: "25px",
    position: "relative",
    top: "18px",
    right: "6px"
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#F3994b"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const [newStatus, setNewStatus] = useState({
    height: "12px",
    width: "12px",
    backgroundColor: "#DE1F26",
    borderRadius: "25px",
    position: "relative",
    top: "58px",
    right: "18px"
  });

  const changeStatus = () => {
    if (newStatus.backgroundColor === '#DE1F26') {
      setNewStatus({
        height: "12px",
        width: "12px",
        backgroundColor: "#02fe02",
        borderRadius: "25px",
        position: "relative",
        top: "58px",
        right: "18px"
      })
    }
    else {
      setNewStatus({
        height: "12px",
        width: "12px",
        backgroundColor: "#DE1F26",
        borderRadius: "25px",
        position: "relative",
        top: "58px",
        right: "18px"
      })
    }
  }

  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="profileHeader mb-3">
            <h5>Profile</h5>
          </div>
          <div className="row">
            <div className="personalInfo col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="personalInfoHeader">
                    <h6 className="card-title">Personal Info</h6>
                    <button type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#personalModal">
                      Edit
                    </button>
                    <div
                      className="modal fade"
                      id="personalModal"
                      tabIndex="-1"
                      aria-labelledby="personalModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="personalModalLabel">
                              Edit Details
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
                              <div className="mb-3">
                                <label for="name" className="form-label">
                                  Change Name
                                </label>
                                <input
                                  type="name"
                                  className="form-control"
                                  id="name"
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlFor="profilePicture" className="form-label">
                                  Change profile picture
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="profilePicture"
                                />
                              </div>

                              <div className="mb-3">
                                <label htmlfor="name" className="form-label">
                                  Change Bio
                                </label>
                                <textarea
                                  type="name"
                                  className="form-control"
                                  id="bio"
                                />
                              </div>

                              <select
                                className="form-select mb-3"
                                aria-label="Default select example"
                              >
                                <option selected disabled>
                                  Change Blood Group
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

                              {/* <div className="form-outline my-3">
                                <label className="form-label" htmlFor="registerDOB">
                                  Change date of birth
                                </label>
                                <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                              </div> */}

                              <div className="mb-3">
                                <label for="password" className="form-label">
                                  Change Password
                                </label>
                                <input type="name" className="form-control" id="password" />
                              </div>

                              <div className="mb-3">
                                <label for="location" className="form-label">
                                  Change Location
                                </label>
                                <input type="name" className="form-control" id="location" />
                              </div>

                              <div className="mb-3">
                                <label for="number" className="form-label">
                                  Change Number
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="number"
                                />
                              </div>

                              <div className="mb-3">
                                <label for="email" className="form-label">
                                  Change Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                />
                              </div>

                              <div className="mb-3">
                                <label for="website" className="form-label">
                                  Change Website
                                </label>
                                <input type="name" className="form-control" id="website" />
                              </div>

                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="personalInfoMainBody">
                    <div className="personalInfoMain">
                      <div className="personalInfoBody card-text" style={{ backgroundColor: "white" }}>
                        <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" style={{ height: "75px" }} alt=""
                        ></img>
                        <div className="forPhone" alt="" style={newStatus}></div>
                        <div className="ms-4">
                          <span>
                            <b>Name: </b>
                            Farhan Hassan Jabil
                          </span>
                          <br />
                          <span>
                            <b>Username: </b>
                            farhan_jabil
                          </span>
                          <br />
                          <span>
                            <b>Blood Type: </b>
                            O+
                          </span>
                          <br />
                          <span>
                            <b>Blood Donated: </b>
                            7
                          </span>
                          <br />
                          <span>
                            <b>Date of Birth: </b>
                            15/5/1998
                          </span>
                          <br />
                          <span>
                            <b>Gender: </b>
                            Male
                          </span>
                          <br />
                          <span>
                            <b>Password: </b>
                            135792468
                          </span>
                          <br />
                        </div>
                      </div>
                      <div className="profileOnlineStatus forPhone">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeStatus} />
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Available for donate
                          </label>
                        </div>
                      </div>
                      <div className="personalInfoBio">
                        <h6>Bio</h6>
                        <span>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                          Odit aliquam rerum minus. Laborum maiores pariatur vero
                          cum totam officia dolorem laudantium, error enim
                          perferendis neque exercitationem at, asperiores, tempore
                          ullam!
                        </span>
                      </div>
                    </div>
                    <div className="personalInfoContact">
                      {/* <div className="contactInfoHeader d-flex">
                        <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="contactModalLabel">
                                  Edit Contact
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <form>
                                  <div className="mb-3">
                                    <label for="location" className="form-label">
                                      Change Location
                                    </label>
                                    <input type="name" className="form-control" id="location" />
                                  </div>
                                  <div className="mb-3">
                                    <label for="number" className="form-label">
                                      Change Number
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="number"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label for="email" className="form-label">
                                      Change Email
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label for="website" className="form-label">
                                      Change Website
                                    </label>
                                    <input type="name" className="form-control" id="website" />
                                  </div>
                                </form>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                  Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="my-3 p-3 rounded-2">
                        <div className="contactInfoBody">
                          <div className="contactInfoBodyText mt-1 d-flex">
                            <i className="fa-sharp fa-solid fa-location-dot mt-1"></i>
                            <span className="ms-3">
                              Imagine Osman Center, Holding No. 34 (Islami Bank
                              Building, Sonargaon Janapath, Dhaka 1230
                            </span>
                          </div>
                          <div className="contactInfoBodyText mt-3 d-flex">
                            <i className="fa-sharp fa-solid fa-phone mt-1"></i>
                            <span className="ms-3">01611-664965</span>
                          </div>
                          <div className="contactInfoBodyText mt-3 d-flex">
                            <i className="fa-sharp fa-solid fa-envelope mt-1"></i>
                            <span className="ms-3">contact@solutya.com</span>
                          </div>
                          <div className="contactInfoBodyText mt-3 d-flex">
                            <i className="fa-sharp fa-solid fa-paperclip mt-1"></i>
                            <span className="ms-3">https://solutya.com/</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="recentBloodRecived col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Recent Blood Recived
                    <span className="viewAll">
                      <Link to="/viewBloodRecived">View All</Link>
                    </span>
                  </h6>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          by <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          by <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img
                        className="rounded-circle img-fluid "
                        src="./images/profile/jacket.jpg"
                        style={{ height: "25px" }}
                        alt=""
                      ></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          by <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img
                        className="rounded-circle img-fluid "
                        src="./images/profile/jacket.jpg"
                        style={{ height: "25px" }}
                        alt=""
                      ></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          by <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img
                        className="rounded-circle img-fluid "
                        src="./images/profile/jacket.jpg"
                        style={{ height: "25px" }}
                        alt=""
                      ></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          by <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img
                        className="rounded-circle img-fluid "
                        src="./images/profile/jacket.jpg"
                        style={{ height: "25px" }}
                        alt=""
                      ></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          by <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img
                        className="rounded-circle img-fluid "
                        src="./images/profile/jacket.jpg"
                        style={{ height: "25px" }}
                        alt=""
                      ></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          by <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="recentBloodDoantion col-lg-4 col-md-4 col-sm-12">
              <div className="card overflow-auto">
                <div className="card-body">
                  <h6 className="card-title">Recent Blood Donation
                    <span className="viewAll">
                      <Link to="/viewBloodDonation">View All</Link>
                    </span>
                  </h6>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          to <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img
                        className="rounded-circle img-fluid "
                        src="./images/profile/jacket.jpg"
                        style={{ height: "25px" }}
                        alt=""
                      ></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          to <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img
                        className="rounded-circle img-fluid "
                        src="./images/profile/jacket.jpg"
                        style={{ height: "25px" }}
                        alt=""
                      ></img>
                      <div alt="" style={status}></div>
                      <div className="ms-2">
                        <small>
                          to <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                      <div className="ms-2">
                        <small>
                          to <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                      <div className="ms-2">
                        <small>
                          to <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                      <div className="ms-2">
                        <small>
                          to <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                  <Link to="/usersProfile">
                    <div className="card-text my-3 d-flex p-1 rounded-2">
                      <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                      <div className="ms-2">
                        <small>
                          to <b>Farhan Hassan Jabil</b>
                        </small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <div className="m-3">
            <div className="row">
              {/* <div className="contactInfo col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="contactInfoHeader d-flex">
                      <h6 className="card-title">Contact Info</h6>
                      <button type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#contactModal" style={{ marginLeft: "100px" }}>
                        Edit
                      </button>
                      <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="contactModalLabel">
                                Edit Contact
                              </h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label for="location" className="form-label">
                                    Change Location
                                  </label>
                                  <input type="name" className="form-control" id="location" />
                                </div>
                                <div className="mb-3">
                                  <label for="number" className="form-label">
                                    Change Number
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="number"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label for="email" className="form-label">
                                    Change Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label for="website" className="form-label">
                                    Change Website
                                  </label>
                                  <input type="name" className="form-control" id="website" />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-text my-3 p-3 rounded-2" style={{ backgroundColor: "white" }}>
                      <div className="contactInfoBody">
                        <div className="contactInfoBodyText mt-1 d-flex">
                          <i className="fa-sharp fa-solid fa-location-dot mt-1"></i>
                          <span className="ms-3">
                            Imagine Osman Center, Holding No. 34 (Islami Bank
                            Building, Sonargaon Janapath, Dhaka 1230
                          </span>
                        </div>
                        <div className="contactInfoBodyText mt-3 d-flex">
                          <i className="fa-sharp fa-solid fa-phone mt-1"></i>
                          <span className="ms-3">01611-664965</span>
                        </div>
                        <div className="contactInfoBodyText mt-3 d-flex">
                          <i className="fa-sharp fa-solid fa-envelope mt-1"></i>
                          <span className="ms-3">contact@solutya.com</span>
                        </div>
                        <div className="contactInfoBodyText mt-3 d-flex">
                          <i className="fa-sharp fa-solid fa-paperclip mt-1"></i>
                          <span className="ms-3">https://solutya.com/</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="lastDonationReport col-lg-8 col-md-8 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="contactInfoHeader">
                      <h6 className="card-title">
                        Last Donation Fatility Report
                      </h6>
                    </div>
                    <div className="forPC reportChart card-text" style={{ backgroundColor: "white" }}>
                      <ResponsiveContainer width="110%" height={260}>
                      <PieChart>
                        <Legend layout="vertical" verticalAlign="top" align="left" />
                        <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={100} fill="" dataKey="value">
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="forPhone reportChart card-text" style={{ backgroundColor: "white" }}>
                      <ResponsiveContainer width="120%" height={360}>
                      <PieChart>
                        <Legend layout="vertical" />
                        <Pie data={data} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={100} fill="" dataKey="value">
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="recentBloodRecived col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">Recent Blood Recived
                      <span className="viewAll">
                        <Link to="/viewBloodRecived">View All</Link>
                      </span>
                    </h6>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            by <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            by <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img
                          className="rounded-circle img-fluid "
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            by <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img
                          className="rounded-circle img-fluid "
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            by <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img
                          className="rounded-circle img-fluid "
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            by <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img
                          className="rounded-circle img-fluid "
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            by <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img
                          className="rounded-circle img-fluid "
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            by <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="recentBloodDoantion col-lg-4 col-md-4 col-sm-12">
                <div className="card overflow-auto">
                  <div className="card-body">
                    <h6 className="card-title">Recent Blood Donation
                      <span className="viewAll">
                        <Link to="/viewBloodDonation">View All</Link>
                      </span>
                    </h6>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            to <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img
                          className="rounded-circle img-fluid "
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            to <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img
                          className="rounded-circle img-fluid "
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            to <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div className="ms-2">
                          <small>
                            to <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div className="ms-2">
                          <small>
                            to <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div className="ms-2">
                          <small>
                            to <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div className="ms-2">
                          <small>
                            to <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="friendList col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="friendListHeader d-flex">
                      <h6 className="card-title">
                        Friends
                        <span className="viewAll">
                          <Link to="/friendList">View All</Link>
                        </span>
                      </h6>
                    </div>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                    <Link to="/usersProfile">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <img className="rounded-circle img-fluid " src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="ms-2">
                          <small>
                            <b>Farhan Hassan Jabil</b>
                          </small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
