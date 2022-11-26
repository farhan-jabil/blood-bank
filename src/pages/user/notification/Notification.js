import React from 'react';
import { Link } from 'react-router-dom';


export default function Notification({ children }) {
    return (
        <>
            <div className="siteLayoutMainBody">
                <div className="siteLayoutBody my-3">
                    <div className="notificationHeader mb-2">
                        <h5>Notification</h5>
                    </div>
                    <div className='notificationBody pt-3'>
                        <div className='card'>
                            <div className="card-body">
                                <div className='notificationTypes'>
                                    <div className='donorNotification'>
                                        <Link to="/donorNotification">
                                            Donor
                                        </Link>
                                    </div>
                                    <div className='receiverNotification'>
                                        <Link to="/recieverNotification">
                                            Reciever
                                        </Link>
                                    </div>
                                    <div className='friendNotification'>
                                        <Link to="/friendNotification">
                                            Friend List
                                        </Link>
                                    </div>
                                </div>
                                <p className="card-text p-3 mt-2">
                                    {children}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
