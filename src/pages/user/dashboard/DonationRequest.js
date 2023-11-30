import React from 'react';
import { Link } from 'react-router-dom';

export default function DonationRequest() {
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="donationRequestHeader mb-3">
            <h5>Donation Request</h5>
          </div>
          <div className="donationRequestorInformation">
            <div className="card">
              <div className="card-body">
                <p className="card-text p-3" style={{ fontSize: "18px" }}>
                  <p><b>Donor Name: </b><Link to="/usersProfile">Farhan Hassan Jabil</Link></p>
                  <p><b>Last Donation Time: </b>13 Minutes ago</p>
                  <p><b>Last Donation Day: </b>Today</p>
                  <p><b>Blood Type: </b>O+</p>
                  <p><b>Donated Location: </b>Lab One Blood Bank <a href="https://goo.gl/maps/8Ya8M9zQp6s4Fr9d9" target="_blank" className="btn btn-primary btn-sm rounded-5 ms-2">See Direction</a></p>
                  <p><b>Contact Number: </b>01641991515</p> 
                  <p><><small>If you want to cancel this request, click on the <span className='text-danger'>Cancel</span> button</small></></p>
                </p>
              </div>
              <button type="button" className="btn btn-danger d-block m-auto" data-bs-toggle="modal" data-bs-target="#confirmCancelModal">Cancel</button>
              <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Cancel</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>You sure you want to cancel?</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-danger">Ok</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
