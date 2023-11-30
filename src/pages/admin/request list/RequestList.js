import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RequestList() {
  const [isShown, setIsShown] = useState(false);

  const showNotification = () => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="dashboardHeader">
            <h5>Request List</h5>
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
          <div className="card">
            <div className="card-body">
              <p className="card-text p-3">
                <table className="table requestTable">
                  <thead>
                    <tr>
                      <th scope="col">Request ID</th>
                      <th scope="col">Number of Donors</th>
                      <th scope="col">Recepient Name</th>
                      <th scope="col">Blood Group</th>
                      <th scope="col">Status</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>2</td>
                      <td>
                        <Link to="/adminUsersProfile">
                        Farhan Hassan Jabil
                        </Link>
                      </td>
                      <td>
                        O+
                      </td>
                      <td>Complete</td>
                      <td>
                        <Link to="/donationDetails">
                        See Full Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>1</td>
                      <td>
                        <Link to="/adminUsersProfile">
                        Farhan Hassan Jabil
                        </Link>
                      </td>
                      <td>
                        O+
                      </td>
                      <td>On Progress</td>
                      <td>
                        <Link to="/donationDetails">
                        See Full Details
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>#003</td>
                      <td>3</td>
                      <td>
                        <Link to="/adminUsersProfile">
                        Farhan Hassan Jabil
                        </Link>
                      </td>
                      <td>
                        O+
                      </td>
                      <td>Cancel</td>
                      <td>
                        <Link to="/donationDetails">
                        See Full Details
                        </Link>
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
