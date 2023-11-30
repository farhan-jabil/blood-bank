import React from 'react';
import { Link } from "react-router-dom";

export default function BloodDonor() {
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="bloodRequestHeader mb-3">
            <h5>Blood Donor</h5>
          </div>
          <div className="bloodRequestorInformation">
            <div className="card">
              <div className="card-body">
                <p className="card-text p-3" style={{fontSize: "18px"}}>
                 <p><b>Donor Name: </b><Link to="/usersProfile">Farhan Hassan Jabil</Link></p>
                 <p><b>Last Donation Time: </b>13 Minutes ago</p>
                 <p><b>Last Donation Day: </b>Today</p>
                 <p><b>Blood Type: </b>O+</p>
                 <p><b>Donated Location: </b>Lab One Blood Bank <a href="https://goo.gl/maps/8Ya8M9zQp6s4Fr9d9" target="_blank" className="btn btn-primary btn-sm rounded-5 ms-2">See Direction</a></p>
                 <p><b>Contact Number: </b>01641991515</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
