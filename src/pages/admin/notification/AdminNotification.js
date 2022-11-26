import React from "react";
import { Link } from "react-router-dom";

export default function AdminNotification() {
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="notificationHeader mb-2">
            <h5>Notification</h5>
          </div>
          <div className="notificationBody pt-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text p-3 mt-2">
                  <table class="table">
                    <tbody>
                      <table class="table">
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td style={{ fontSize: "18px" }}>
                              <Link to="/usersProfile">
                                Farhan Hassan Jabil
                              </Link>{" "}
                              has joined.   
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td style={{ fontSize: "18px" }}>
                              <Link to="/usersProfile">
                                Farhan Hassan Jabil
                              </Link>{" "} has {" "}
                              <Link to="/donationDetails">request </Link> for blood.   
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </tbody>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
