import React from "react";
import { Link } from "react-router-dom";

export default function BloodRequest() {
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="bloodRequestHeader mb-3">
            <h5>Blood Request</h5>
          </div>
          <div className="bloodRequestorInformation">
            <div className="card">
              <div className="card-body">
                <p className="card-text p-3" style={{ fontSize: "18px" }}>
                  <p><b>Requestor Name: </b><Link to="/usersProfile">Farhan Hassan Jabil</Link></p>
                  <p><b>Requested Time: </b>13 Minutes ago</p>
                  <p><b>Requested Day: </b>Today</p>
                  <p><b>Blood Type: </b>O+</p>
                  <p><b>Reason for donate: </b>Emergency blood needed for accident victim</p>
                  <p><b>Location: </b>Lab One Blood Bank <a href="https://goo.gl/maps/8Ya8M9zQp6s4Fr9d9" target="_blank" className="btn btn-primary btn-sm rounded-5 ms-2">See Direction</a></p>
                  <p><b>Contact Number: </b>01641991515</p>
                </p>
                <Link to="/dashboard">
                  <button type="button" className="btn btn-danger btn-sm">
                    <i className="fa-sharp fa-solid fa-xmark me-1"></i>
                    Cancel
                  </button>
                </Link>
                <button type="button" className="btn btn-primary btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#confirmCancelModal"><i className="fa-sharp fa-solid fa-check me-1"></i>Donate</button>
                <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Donate</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p>You sure you want to Donate?</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <Link to="/dashboard">
                        <button type="button" className="btn btn-primary">Yes</button>
                        </Link>
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
