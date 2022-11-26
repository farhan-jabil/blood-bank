import React from 'react';
import { Link } from "react-router-dom";

export default function ViewRecentUsers() {
  const status = {
    height: "8px",
    width: "8px",
    backgroundColor: "#DE1F26",
    borderRadius: "25px",
    position: "relative",
    top: "50px",
    right: "10px"
  };

  const newStatus = {
    height: "8px",
    width: "8px",
    backgroundColor: "#DE1F26",
    borderRadius: "25px",
    position: "relative",
    bottom: "25px",
    left: "140px"
  };

  return (
    <>
     <div className='siteLayoutMainBody'>
        <div className='siteLayoutBody my-3'>
          <div className="viewRecentUsers mb-3">
            <h5>Added User</h5>
          </div>
          <div className="card">
            <div className="card-body">
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
              <Link to="/adminUsersProfile">
                <div className="addedUser card-text">
                  <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                  <div className='forPC' alt="" style={status}></div>
                  <div className="forPhone" alt="" style={newStatus}></div>
                  <div className="bloodRecivedDonatedData ms-3">
                    <p><b>Name: </b>Farhan Hassan Jabil</p>
                    <p><b>Blood Group: </b>O+</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}
