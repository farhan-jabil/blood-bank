import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function UsersList() {

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

    const [isShown, setIsShown] = useState(false);

    const showNotification = () => {
        setIsShown(current => !current)
    }
    return (
        <>
            <div className="siteLayoutMainBody">
                <div className="siteLayoutBody my-3">
                    <div className="dashboardHeader">
                        <h5>Users List</h5>
                        <div className="ms-3">
                        </div>
                        <div className="notification">
                            <i className="fa-sharp fa-solid fa-bell" onClick={showNotification}></i>
                            <div className="card" style={{ display: isShown ? 'block' : 'none' }}>
                                <div className="card-body">
                                    1 Donor has accept your <Link to="/donationRequest">donation request</Link>. Please go request page to confirm your donor.
                                </div>
                                <span style={{ fontSize: "12px", paddingLeft: "65px" }}><Link to="/donorNotification">Show all Notification</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-outline">
                                        <input type="search" id="form1" className="form-control" placeholder="Search by name" />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5"></div>
                                <div className="bloodBankSearch col-lg-3 col-md-3 col-sm-12">
                                    <select className="form-select" aria-label="Default select example">
                                        <option value="1">All Users</option>
                                        <option value="2">Today</option>
                                        <option value="3">Yesterday</option>
                                        <option value="4">This Month</option>
                                        <option value="5">Previous Month</option>
                                        <option value="5">This Year</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <p>Total Users : <b>9</b></p>
                            </div>
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
