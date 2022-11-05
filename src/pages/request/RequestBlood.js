import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function RequestBlood({children}) {
  const { pathname } = useLocation();
  return (
    <>
      <div className='siteLayoutMainBody'>
        <div className='siteLayoutBody my-3'>
          <div className="requestBloodHeader d-flex mb-3">
            <h5>Request for Blood</h5>
            <Link to="/requestBlood">New Request for Blood</Link>
          </div>
          <div className="bloodRequestorInformation">
            <div className="card">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
