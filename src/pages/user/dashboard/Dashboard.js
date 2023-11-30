import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  ResponsiveContainer,
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

  const status = {
    height: "6px",
    width: "6px",
    backgroundColor: "#DE1F26",
    borderRadius: "25px",
    position: "relative",
    top: "26px",
    right: "5px"
  };

  const [isShown, setIsShown] = useState(false);

  const showNotification = () => {
    setIsShown(current => !current)
  }

  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="dashboardHeader mb-3">
            <h5>Dashboard</h5>
            <div className="notification">
              <i className="fa-sharp fa-solid fa-bell" onClick={showNotification}></i>
              <div className="card" style={{display: isShown ? 'block' : 'none'}}>
                <div className="card-body">
                1 Donor has accept your <Link to="/donationRequest">donation request</Link>. Please go request page to confirm your donor.
                </div>
                <span style={{fontSize: "12px", paddingLeft: "65px"}}><Link to="/donorNotification">Show all Notification</Link></span>
              </div>
            </div>
          </div>

          <div className="dashboardBodyUp mb-4">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <div className="recentBloodRequest">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Recent Blood Request</h6>
                      <div className="requestBody">
                      <Link to="/bloodRequest">
                        <div className="card-text my-3 d-flex p-1 rounded-2">
                          <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                          <div className="dashboard-card-text ms-2">
                            <small>13 minutes ago</small>
                            <br />
                            Emergency blood needed for car accident victim
                          </div>
                          <div className="bloodGroup">O+</div>
                        </div>
                      </Link>
                      <Link to="/bloodRequest">
                        <div className="card-text my-3 d-flex p-1 rounded-2">
                          
                          <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                          <div className="dashboard-card-text ms-2">
                            <small>13 minutes ago</small>
                            <br />
                            Emergency blood needed for car accident victim
                          </div>
                          <div className="bloodGroup">O+</div>
                        </div>
                      </Link>
                      <Link to="/bloodRequest">
                        <div className="card-text my-3 d-flex p-1 rounded-2">
                          <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                          <div className="dashboard-card-text ms-2">
                            <small>13 minutes ago</small>
                            <br />
                            Emergency blood needed for car accident victim
                          </div>
                          <div className="bloodGroup">O+</div>
                        </div>
                      </Link>
                      <Link to="/bloodRequest">
                        <div className="card-text my-3 d-flex p-1 rounded-2">
                          <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                          <div className="dashboard-card-text ms-2">
                            <small>13 minutes ago</small>
                            <br/>
                          </div>
                          <div className="bloodGroup">O+</div> 
                        </div>
                     </Link>
                      <Link to="/bloodRequest">
                        <div className="card-text my-3 d-flex p-1 rounded-2">
                          <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                          <div className="dashboard-card-text ms-2">
                            <small>13 minutes ago</small>
                          </div>
                          <div className="bloodGroup">O+</div>
                        </div>
                     </Link>
                      <Link to="/bloodRequest">
                        <div className="card-text my-3 d-flex p-1 rounded-2">
                          <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                          <div className="dashboard-card-text ms-2">
                            <small>13 minutes ago</small>
                            <br />
                            Emergency blood needed for car accident victim
                          </div>
                          <div className="bloodGroup">O+</div>
                        </div>
                      </Link>
                      </div>
                      <Link to="/confirmStatus">Previous Confirmation Status</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-2"></div>
              <div className="donationStatistics col-lg-7 col-md-7 col-sm-12 ">
                <div className="card">
                  <div className="card-body">
                    <div className="donationStatisticsHeader pt-3">
                      <h6 className="card-title">Donation Statistics</h6>
                      <div className="ms-3">
                        <select className="ms-1" aria-label="Default select example" defaultValue={'DEFAULT'}>
                          <option value="DEFAULT" disabled>Blood Type: All</option>
                          <option value="1">Blood Type: O+</option>
                          <option value="2">Blood Type: O-</option>
                          <option value="3">Blood Type: A+</option>
                          <option value="3">Blood Type: A-</option>
                          <option value="3">Blood Type: B+</option>
                          <option value="3">Blood Type: B-</option>
                          <option value="3">Blood Type: AB+</option>
                          <option value="3">Blood Type: AB-</option>
                        </select>
                        <select className="ms-3" aria-label="Default select example" defaultValue={'DEFAULT'}>
                          <option value="DEFAULT" disabled>This Year</option>
                          <option value="1">2021</option>
                          <option value="2">2020</option>
                        </select>
                      </div>
                    </div>
                    <div className="chart">
                      <ResponsiveContainer width="110%" height={320}>
                        <BarChart data={statData} className="donorChart">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="BloodDonor" fill="#DE1F26" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboardBodyDown">
            <div className="row">
              <div className="recentBloodDonor col-lg-4 col-md-3 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">Recent Blood Donor</h6>
                    <Link to="/bloodDonor">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        
                        <img className="rounded-circle img-fluid mt-2" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="dashboard-card-text ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:30AM
                        </div>
                        <div className="bloodGroup">O+</div> 
                      </div>
                    </Link>
                    <Link to="/bloodDonor">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        
                        <img className="rounded-circle img-fluid mt-2" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="dashboard-card-text ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:30AM
                        </div>
                        <div className="bloodGroup">O+</div> 
                      </div>
                    </Link>
                    <Link to="/bloodDonor">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        
                        <img className="rounded-circle img-fluid mt-2" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="dashboard-card-text ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:30AM
                        </div>
                        <div className="bloodGroup">O+</div> 
                      </div>
                    </Link>
                    <Link to="/bloodDonor">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        
                        <img className="rounded-circle img-fluid mt-2" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="dashboard-card-text ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:30AM
                        </div>
                        <div className="bloodGroup">O+</div> 
                      </div>
                    </Link>
                    <Link to="/bloodDonor">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        
                        <img className="rounded-circle img-fluid mt-2" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="dashboard-card-text ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:30AM
                        </div>
                        <div className="bloodGroup">O+</div> 
                      </div>
                    </Link>
                    <Link to="/bloodDonor">
                      <div className="card-text my-3 d-flex p-1 rounded-2">
                        
                        <img className="rounded-circle img-fluid mt-2" src="./images/profile/jacket.jpg" style={{ height: "25px" }} alt=""></img>
                        <div alt="" style={status}></div>
                        <div className="dashboard-card-text ms-2">
                          Farhan Hassan Jabil
                          <br />
                          11:30AM
                        </div>
                        <div className="bloodGroup">O+</div> 
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-2"></div>
              <div className="donationStatistics col-lg-7 col-md-7 col-sm-12 ">
                <div className="card">
                  <div className="card-body">
                    <div className="donationStatisticsHeader d-flex">
                      <h6 className="card-title">
                        Donation Request and Recieved
                      </h6>
                      <div className="ms-3">
                        <select className="ms-1" aria-label="Default select example" defaultValue={'DEFAULT'}>
                          <option value="DEFAULT" disabled>Today</option>
                          <option value="1">Yesterday</option>
                          <option value="2">This Month</option>
                          <option value="3">Previous Month</option>
                        </select>
                      </div>
                    </div>
                    <div className="chart">
                      <ResponsiveContainer width="110%" height={320} >
                        <BarChart data={requestReceivedData} className="donorChart">
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="Request" fill="#1FD9D9" />
                          <Bar dataKey="Received" fill="#DE1F26" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
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
