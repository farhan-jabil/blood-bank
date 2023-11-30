import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function BloodBank(props) {
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className="BloodBankHeader mb-3">
            <h5 className="mb-3">Blood Bank</h5>
          <div className="row mt-2">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Search by name"/>
              </div>
            </div>
            <div className="col-lg-5 col-md-5"></div>
            <div className="bloodBankSearch col-lg-3 col-md-3 col-sm-12">
              <select className="form-select" aria-label="Default select example">
                <option selected disabled>
                  Search by district
                </option>
                <option value="1">Dhaka</option>
                <option value="2">Tangail</option>
              </select>
            </div>
          </div>
          </div>
          <div className="bloodBankBody">
            <div className="row">
              <div className="card col-lg-3 col-md-6 col-sm-12">
                <img src="..." className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title">Lab One Blood Bank</h6>
                  <hr/>
                  <p className="card-text bg-white">
                    <i className="fa-sharp fa-solid fa-location-dot me-3"></i>
                    <span>Uttara, Dhaka</span>
                    <br />
                    <i className="fa-sharp fa-solid fa-phone me-3"></i>
                    <span>01922-117676</span>
                  </p>
                  {/* <button></button> */}
                  <a href="https://goo.gl/maps/8Ya8M9zQp6s4Fr9d9" target="_blank" className="btn btn-primary">
                    Show on map
                  </a>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="card col-lg-3 col-md-6 col-sm-12">
                <img src="..." className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title">
                    Uttara Blood Bank and Transfusion Center
                  </h6>
                  <hr/>
                  <p className="card-text bg-white">
                    <i className="fa-sharp fa-solid fa-location-dot me-3"></i>
                    <span>Uttara, Dhaka</span>
                    <br/>
                    <i className="fa-sharp fa-solid fa-phone me-3"></i>
                    <span>01627-634363</span>
                  </p>
                  <a href="https://goo.gl/maps/FdLeD4xbDZPhiYrX6" target="_blank" className="btn btn-primary">
                    Show on map
                  </a>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="card col-lg-3 col-md-6 col-sm-12">
                <img src="..." className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title">
                    Blood Donation Bangladesh Welfare Foundation
                  </h6>
                  <hr/>
                  <p className="card-text bg-white">
                    <i className="fa-sharp fa-solid fa-location-dot me-3"></i>
                    <span>Uttara, Dhaka</span>
                    <br />
                    <i className="fa-sharp fa-solid fa-phone me-3"></i>
                    <span>01911-711169</span>
                  </p>
                  <a href="https://goo.gl/maps/i4BBTU8rE1UZ5FiV9" className="btn btn-primary">
                    Show on map
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card col-lg-3 col-md-6 col-sm-12">
                <img src="..." className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title">Lab One Blood Bank</h6>
                  <hr/>
                  <p className="card-text bg-white">
                    <i className="fa-sharp fa-solid fa-location-dot me-3"></i>
                    <span>Uttara, Dhaka</span>
                    <br />
                    <i className="fa-sharp fa-solid fa-phone me-3"></i>
                    <span>01922-117676</span>
                  </p>
                  <a href="https://goo.gl/maps/8Ya8M9zQp6s4Fr9d9" target="_blank"className="btn btn-primary">
                    Show on map
                  </a>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="card col-lg-3 col-md-6 col-sm-12">
                <img src="..." className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title">
                    Uttara Blood Bank and Transfusion Center
                  </h6>
                  <hr/>
                  <p className="card-text bg-white">
                    <i className="fa-sharp fa-solid fa-location-dot me-3"></i>
                    <span>Uttara, Dhaka</span>
                    <br />
                    <i className="fa-sharp fa-solid fa-phone me-3"></i>
                    <span>01627-634363</span>
                  </p>
                  <a href="https://goo.gl/maps/FdLeD4xbDZPhiYrX6" target="_blank" className="btn btn-primary">
                    Show on map
                  </a>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="card col-lg-3 col-md-6 col-sm-12">
                <img src="..." className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title">
                    Blood Donation Bangladesh Welfare Foundation
                  </h6>
                  <hr/>
                  <p className="card-text bg-white">
                    <i className="fa-sharp fa-solid fa-location-dot me-3"></i>
                    <span>Uttara, Dhaka</span>
                    <br />
                    <i className="fa-sharp fa-solid fa-phone me-3"></i>
                    <span>01911-711169</span>
                  </p>
                  <a href="https://goo.gl/maps/i4BBTU8rE1UZ5FiV9" className="btn btn-primary">
                    Show on map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
