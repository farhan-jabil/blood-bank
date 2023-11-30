import React, { useState } from "react";
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
  PieChart,
  Pie,
  Sector,
  Cell,
  LineChart,
  Line
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

  const statusData = [
    { name: 'Total Users', value: 75 },
    { name: 'Donors', value: 37 },
    { name: 'Recipents', value: 49 },
    { name: 'Irregular Users', value: 26 },
  ];

  const incomeData = [
    {
      name: 'Jan',
      taka: 4120
    },
    {
      name: 'Feb',
      taka: 6370
    },
    {
      name: 'Mar',
      taka: 3450
    },
    {
      name: 'Apr',
      taka: 5760
    },
    {
      name: 'May',
      taka: 4690
    },
    {
      name: 'Jun',
      taka: 3310
    },
    {
      name: 'Jul',
      taka: 2430
    },
    {
      name: 'Aug',
      taka: 4960
    },
    {
      name: 'Sep',
      taka: 5390
    },
    {
      name: 'Oct',
      taka: 5720
    },
    {
      name: 'Nov',
      taka: 2590
    },
    {
      name: 'Dec  ',
      taka: 4190
    },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const status = {
    height: "6px",
    width: "6px",
    backgroundColor: "#DE1F26",
    borderRadius: "25px",
    position: "relative",
    top: "20px",
    right: "5px",
  };

  const [isShown, setIsShown] = useState(false);

  const showNotification = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="dashboardHeader mb-3">
            <h5>Dashboard</h5>
            <div className="notification">
              <i
                className="fa-sharp fa-solid fa-bell"
                onClick={showNotification}
              ></i>
              <div
                className="card"
                style={{ display: isShown ? "block" : "none" }}
              >
                <div className="card-body">
                  1 Donor has accept your{" "}
                  <Link to="/donationRequest">donation request</Link>. Please go
                  request page to confirm your donor.
                </div>
                <span style={{ fontSize: "12px", paddingLeft: "65px" }}>
                  <Link to="/donorNotification">Show all Notification</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="dashboardBody mb-4">
            <div className="row">
              <div className="col-lg-5 col-md-3 col-sm-12">
                <div className="companyStatus">
                  <div className="card">
                    <div className="card-body">
                      <div className="companyStatusHeader pt-3">
                        <h6 className="card-title">Status</h6>
                        <div className="mt-4">
                          Users
                          <PieChart width={250} height={300}>
                            <Legend verticalAlign="top" height={50} />
                            <Pie
                              data={statusData}
                              cx={150}
                              cy={100}
                              innerRadius={60}
                              outerRadius={80}
                              fill="#8884d8"
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {statusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </div>
                        <div>
                          Income
                          <LineChart width={330} height={420} data={incomeData}
                            margin={{top: 40}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="taka" stroke="#8884d8" />
                          </LineChart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="donationStatistics ">
                  <div className="card">
                    <div className="card-body">
                      <div className="donationStatisticsHeader pt-3">
                        <h6 className="card-title">Donation Statistics</h6>
                        <div className="ms-3">
                          <select
                            className="ms-1"
                            aria-label="Default select example"
                            defaultValue={"DEFAULT"}
                          >
                            <option value="DEFAULT" disabled>
                              Blood Type: All
                            </option>
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
                            className="ms-3"
                            aria-label="Default select example"
                            defaultValue={"DEFAULT"}
                          >
                            <option value="DEFAULT" disabled>
                              This Year
                            </option>
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
                <div className="donationStatistics mt-5">
                  <div className="card">
                    <div className="card-body">
                      <div className="donationStatisticsHeader d-flex">
                        <h6 className="card-title">
                          Donation Request and Recieved
                        </h6>
                        <div className="ms-3">
                          <select
                            className="ms-1"
                            aria-label="Default select example"
                            defaultValue={"DEFAULT"}
                          >
                            <option value="DEFAULT" disabled>
                              Today
                            </option>
                            <option value="1">Yesterday</option>
                            <option value="2">This Month</option>
                            <option value="3">Previous Month</option>
                          </select>
                        </div>
                      </div>
                      <div className="chart">
                        <ResponsiveContainer width="110%" height={320}>
                          <BarChart
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
                        </ResponsiveContainer>
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
  );
}
