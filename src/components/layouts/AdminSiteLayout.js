import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

export default function AdminSiteLayout({ children }) {
  const { pathname } = useLocation();
  // const [status, setStatus] = useState({
  //   height: "15px",
  //   width: "15px",
  //   backgroundColor: "#DE1F26",
  //   borderRadius: "25px",
  //   position: "relative",
  //   top: "140px",
  //   right: "35px"
  // });

  // const chatStatus = {
  //   height: "6px",
  //   width: "6px",
  //   backgroundColor: "#DE1F26",
  //   borderRadius: "25px",
  //   position: "relative",
  //   top: "22px",
  //   right: "6px"
  // };

  // const changeStatus = () => {
  //   if (status.backgroundColor === '#DE1F26') {
  //     setStatus({
  //       height: "15px",
  //       width: "15px",
  //       backgroundColor: "#02fe02",
  //       borderRadius: "25px",
  //       position: "relative",
  //       top: "140px",
  //       right: "35px"
  //     })
  //   }
  //   else {
  //     setStatus({
  //       height: "15px",
  //       width: "15px",
  //       backgroundColor: "#DE1F26",
  //       borderRadius: "25px",
  //       position: "relative",
  //       top: "140px",
  //       right: "35px"
  //     })
  //   }
  // }

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #E6F0F1; }"}</style>
      </Helmet>
      <div className="siteLayout">
        <div className="siteLayoutMain bg-white d-flex">
          <div className="sidebar pt-4">
            <div className="sidebarLogo">
              <img className="siteLayoutLogo" src="images/logo/logo.jpg" alt="" />
            </div>
            <ul className="nav_list">
              <li className="mt-4" style={{ backgroundColor: pathname === "/adminDashboard" ? "#E6F0F1" : pathname === "/recentUsers" ? "#E6F0F1" :  "inherit" }}>
                <Link to="/adminDashboard">
                  <i className="fa-sharp fa-solid fa-house"></i>Dashboard
                </Link>
              </li>
              <li style={{ backgroundColor: pathname === "/usersList" ? "#E6F0F1" :  "inherit" }}>
                <Link to="/usersList">
                <i class="fa-sharp fa-solid fa-users"></i>Users List
                </Link>
              </li>
              <li style={{ backgroundColor: pathname === "/requestList" ? "#E6F0F1" : pathname === "/donationDetails" ? "#E6F0F1" :  "inherit" }}>
                <Link to="/requestList">
                <i class="fa-sharp fa-solid fa-list"></i>Request List
                </Link>
              </li>
              <li style={{ backgroundColor: pathname === "/emailVerification" ? "#E6F0F1" :  "inherit" }}>
                <Link to="/emailVerification">
                <i class="fa-sharp fa-solid fa-envelope"></i>E-mail Verification
                </Link>
              </li>
              {/* <li style={{ backgroundColor: pathname === "/requestBlood" ? "#E6F0F1" : pathname === "/requestStatus" ? "#E6F0F1" : "inherit" }}>
                <Link to="/requestStatus" >
                  <i className="fa-solid fa-syringe"></i>
                  Request
                </Link>
              </li> */}
              <li style={{ backgroundColor: pathname === "/adminNotification" ? "#E6F0F1": "inherit" }}>
                <Link to="/adminNotification">
                <i className="fa-sharp fa-solid fa-bell"></i>
                  Notification
                </Link>
              </li>
              {/* <li style={{ backgroundColor: pathname === "/bloodStatus" ? "#E6F0F1" : "inherit" }}>
                <Link to="/bloodStatus">
                  <i className="fa-solid fa-clipboard-list"></i>
                  Blood Status
                </Link>
              </li> */}
              <li style={{ backgroundColor: pathname === "/adminProfile" ? "#E6F0F1" : pathname === "/adminUsersProfile" ? "#E6F0F1" : "inherit" }}>
                <Link to="/adminProfile">
                  <i className="fa-sharp fa-solid fa-user "></i>Profile
                </Link>
              </li>
              <li style={{ backgroundColor: pathname === "/adminBloodBank" ? "#E6F0F1" : pathname === "/addBloodBank" ? "#E6F0F1" : "inherit"}}>
                <Link to="/adminBloodBank">
                  <i className="fa-sharp fa-solid fa-building-columns "></i>
                  Blood Bank
                </Link>
              </li>
              <li style={{ backgroundColor: pathname === "/adminDonor" ? "#E6F0F1" : "inherit", }}>
                <Link to="/adminDonor">
                  <i className="fa-sharp fa-solid fa-heart-circle-xmark "></i>
                  Donors
                </Link>
              </li>
              <li style={{ backgroundColor: pathname === "/adminConversation" ? "#E6F0F1" : "inherit"}}>
                <Link to="/adminConversation">
                <i className="fa-solid fa-message"></i>
                  Conversation
                </Link>
              </li>
              
              <li>
                <Link to="/login">
                  <i className="fa-sharp fa-solid fa-right-from-bracket "></i>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
          {children}
          <div className="forPC profileBar pt-4">
            <div className="d-flex">
              <div>
                <img className="adminProfileBarDP img-fluid" src="images/logo/logo.jpg" alt=""></img>
              </div>
            </div>
            <div className="adminProfileBarInfo">
              <p><b>Blood Donors</b></p>
            </div>
            <div className="recentChats">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Recent Chats</h6>
                  <div className="card-text my-3 d-flex p-1 rounded-2">
                    <div className="chatTime">11:32 AM</div>
                    <div className="chatTimeDP">
                      <img
                        className="rounded-circle img-fluid mt-1"
                        src="./images/profile/jacket.jpg"
                        alt=""
                      ></img>
                    </div>
                    {/* <div alt="" style={chatStatus}></div> */}
                    <div className="ms-2" style={{ fontSize: "10px" }}>
                      Farhan Hassan Jabil
                      <br />
                      Hi. I need blood!
                    </div>
                  </div>
                  <div className="card-text my-3 d-flex p-1 rounded-2">
                    <div className="chatTime">11:32 AM</div>
                    <div className="chatTimeDP">
                      <img
                        className="rounded-circle img-fluid mt-1"
                        src="./images/profile/jacket.jpg"
                        alt=""
                      ></img>
                    </div>
                    {/* <div alt="" style={chatStatus}></div> */}
                    <div className="ms-2" style={{ fontSize: "10px" }}>
                      Farhan Hassan Jabil
                      <br />
                      Hi. I need blood!
                    </div>
                  </div>
                  <div className="card-text my-3 d-flex p-1 rounded-2">
                    <div className="chatTime">11:32 AM</div>
                    <div className="chatTimeDP">
                      <img
                        className="rounded-circle img-fluid mt-1"
                        src="./images/profile/jacket.jpg"
                        alt=""
                      ></img>
                    </div>
                    {/* <div alt="" style={chatStatus}></div> */}
                    <div className="ms-2" style={{ fontSize: "10px" }}>
                      Farhan Hassan Jabil
                      <br />
                      Hi. I need blood!
                    </div>
                  </div>
                  <div className="card-text my-3 d-flex p-1 rounded-2">
                    <div className="chatTime">11:32 AM</div>
                    <div className="chatTimeDP">
                      <img
                        className="rounded-circle img-fluid mt-1"
                        src="./images/profile/jacket.jpg"
                        alt=""
                      ></img>
                    </div>
                    {/* <div alt="" style={chatStatus}></div> */}
                    <div className="ms-2" style={{ fontSize: "10px" }}>
                      Farhan Hassan Jabil
                      <br />
                      Hi. I need blood!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
