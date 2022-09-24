import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Dashboard() {
  const statData = [
    {
      name: "Jan",
      BloodDonor: 43,
    },
    {
      name: "Feb",
      BloodDonor: 61,
    },
    {
      name: "Mar",
      BloodDonor: 57,
    },
    {
      name: "Apr",
      BloodDonor: 76,
    },
    {
      name: "May",
      BloodDonor: 62,
    },
    {
      name: "Jun",
      BloodDonor: 58,
    },
    {
      name: "Jul",
      BloodDonor: 73,
    },
    {
      name: "Aug",
      BloodDonor: 79,
    },
    {
      name: "Sep",
      BloodDonor: 83,
    },
    {
      name: "Oct",
      BloodDonor: 71,
    },
    {
      name: "Nov",
      BloodDonor: 86,
    },
    {
      name: "Dec",
      BloodDonor: 89,
    },
  ];

  const requestReceivedData = [
    {
      name: "O+",
      Request: 11,
      Received: 3,
    },
    {
      name: "O-",
      Request: 3,
      Received: 0,
    },
    {
      name: "A+",
      Request: 16,
      Received: 6,
    },
    {
      name: "A-",
      Request: 5,
      Received: 1,
    },
    {
      name: "B+",
      Request: 13,
      Received: 7,
    },
    {
      name: "B-",
      Request: 4,
      Received: 0,
    },
    {
      name: "AB+",
      Request: 21,
      Received: 12,
    },
    {
      name: "AB-",
      Request: 9,
      Received: 2,
    },
  ];

  return (
    <>
      <Helmet>
        <style>{"body { background-color: #E6F0F1; }"}</style>
      </Helmet>
      <div className="container mt-4">
        <div
          className="bg-white border rounded-5 d-flex"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="sidebar pt-4" style={{ width: "230px" }}>
            <h5 className="ps-5">
              project <span style={{ color: "#DE1F26" }}>DONOR</span>
            </h5>
            <ul className="nav_list">
              <li className="mt-4" style={{ backgroundColor: "#E6F0F1" }}>
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-house"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-user "></i>Profile
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-building-columns "></i>Blood
                  Bank
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-heart-circle-xmark "></i>Donors
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-bed-pulse "></i>Patients
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-signal "></i>Statistics
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i class="fa-sharp fa-solid fa-gear "></i>Settings
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i class="fa-sharp fa-solid fa-right-from-bracket "></i>Log
                  out
                </Link>
              </li>
            </ul>
          </div>
          <div className="dashboard">
            <div className="dashboardBody my-3">
              <div className="dashboardHeader d-flex">
                <h5>Dashboard</h5>
                <ul className="d-flex" style={{ marginLeft: "600px" }}>
                  <li>
                    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                  </li>
                  <li className="ms-3">
                    <i class="fa-sharp fa-regular fa-bell"></i>
                  </li>
                </ul>
              </div>
              <div className="d-flex">
                <div className="recentBloodRequest">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h6 className="card-title">Recent Blood Request</h6>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">O+</div>
                        <img
                          className="rounded-circle img-fluid mt-3"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          <small>13 minutes ago</small>
                          <br />
                          Emergency blood needed for car accident victim
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">A+</div>
                        <img
                          className="rounded-circle img-fluid mt-3"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          <small>13 minutes ago</small>
                          <br />
                          Emergency blood needed for car accident victim
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">B+</div>
                        <img
                          className="rounded-circle img-fluid mt-3"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          <small>13 minutes ago</small>
                          <br />
                          Emergency blood needed for car accident victim
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">AB+</div>
                        <img
                          className="rounded-circle img-fluid mt-3"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          <small>13 minutes ago</small>
                          <br />
                          Emergency blood needed for car accident victim
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-4">
                  <div className="hero">
                    <div className="card" style={{ width: "30rem" }}>
                      <div className="card-body">
                        <h4 style={{ color: "#DE1F26" }}>
                          Be A Hero - It's In Your Blood!
                        </h4>
                        <p className="mt-3">
                          Register to be a blood donor, give blood and save
                          lives.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="donationStatistics my-3">
                    <div className="card" style={{ width: "30rem" }}>
                      <div className="card-body">
                        <div className="donationStatisticsHeader d-flex">
                          <h6 className="card-title">Donation Statistics</h6>
                          <div className="ms-5">
                            <select
                              class="ms-1"
                              aria-label="Default select example"
                            >
                              <option selected>Blood Type: All</option>
                              <option value="1">Blood Type: O+</option>
                              <option value="2">Blood Type: O-</option>
                              <option value="3">Blood Type: A+</option>
                              <option value="3">Blood Type: A-</option>
                              <option value="3">Blood Type: B+</option>
                              <option value="3">Blood Type: B-</option>
                              <option value="3">Blood Type: AB+</option>
                              <option value="3">Blood Type: AB-</option>
                            </select>
                            <select
                              class="ms-3"
                              aria-label="Default select example"
                            >
                              <option selected>This Year</option>
                              <option value="1">2021</option>
                              <option value="2">2020</option>
                            </select>
                          </div>
                        </div>
                        <div className="pt-3">
                          <BarChart
                            width={480}
                            height={220}
                            data={statData}
                            className="donorChart"
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="BloodDonor" fill="#DE1F26" />
                          </BarChart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="recentBloodDonor">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h6 className="card-title">Recent Blood Donor</h6>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">O+</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">O+</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">O+</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="bloodGroup">O+</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="donationStatistics ms-4">
                  <div className="card" style={{ width: "30rem" }}>
                    <div className="card-body">
                      <div className="donationStatisticsHeader d-flex">
                        <h6 className="card-title">
                          Donation Request and Recieved
                        </h6>
                        <div className="ms-5">
                          <select
                            class="ms-3"
                            aria-label="Default select example"
                          >
                            <option selected>Today</option>
                            <option value="1">Yesterday</option>
                            <option value="2">This Month</option>
                            <option value="3">Previous Month</option>
                          </select>
                        </div>
                      </div>
                      <div className="pt-4">
                        <BarChart
                          width={480}
                          height={250}
                          data={requestReceivedData}
                          className="donorChart"
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="Request" fill="#1FD9D9" />
                          <Bar dataKey="Received" fill="#DE1F26" />
                        </BarChart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile p-4">
            <img
              className="rounded-circle img-fluid mt-3"
              src="./images/profile/jacket.jpg"
              style={{ height: "150px" }}
              alt=""
            ></img>
            <div className="profileInfo mt-2">
              <p>Farhan Hassan Jabil</p>
              <p>
                Blood Type: <b>O+</b>
              </p>
            </div>
            <div class="form-check form-switch">
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Available for donate
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
            <div className="recentChats">
                  <div className="card" style={{  }}>
                    <div className="card-body">
                      <h6 className="card-title">Recent Chats</h6>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="chatTime">11:32 AM</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="chatTime">11:32 AM</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="chatTime">11:32 AM</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        <div className="chatTime">11:32 AM</div>
                        <img
                          className="rounded-circle img-fluid mt-2"
                          src="./images/profile/jacket.jpg"
                          style={{ height: "25px" }}
                          alt=""
                        ></img>
                        <div className="ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:32 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="profileStatus"></div>
      </div>
    </>
  );
}
