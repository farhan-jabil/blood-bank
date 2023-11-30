import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function AdminConversation() {
    const { pathname } = useLocation();
  const status = {
    height: "5px",
    width: "5px",
    backgroundColor: "#DE1F26",
    borderRadius: "25px",
    position: "relative",
    top: "21px",
    right: "21px",
  };
  return (
    <>
      <div className="siteLayoutMainBody">
        <div className="siteLayoutBody my-3">
          <div className='conversationHeader'>
            <h5>Conversation</h5>
          </div>
          <div className='conversationBody mt-3'>
            <div className="card">
              <div className="card-body p-2">
                <div className="card-text">
                  <div className='conversationBody d-flex'>
                    <div className='conversationSidebar'>
                      <div className="form-outline">
                        <input type="search" id="form1" className="form-control" placeholder="Search by name" />
                      </div>
                      <ul className="convo_list">
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone">View Text</a>
                            </div>
                          </Link>
                        </li>
                        <li className='my-2' style={{ backgroundColor: "#E6F0F1" }}>
                          <Link to="">
                            <div className='d-flex'>
                              <div className=''>
                                <img className="rounded-circle img-fluid" src="./images/profile/jacket.jpg" alt=""></img>
                              </div>
                              <div className=''>
                                <div alt="" style={status}></div>
                                Farhan Hassan Jabil
                              </div>
                              <a type="button" className="convoButton btn btn-primary btn-sm forPhone" data-bs-toggle="collapse" data-bs-target="#collapseConversation" aria-expanded="false" aria-controls="collapseConversation">View Text</a>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className='conversationChat forPC'>
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <img className="rounded-circle img-fluid mx-3" src="./images/profile/jacket.jpg" alt=""></img>
                            <Link to="/usersProfile">
                              Farhan Hassan Jabil
                            </Link>
                          </div>
                        </div>
                      </nav>
                      <div className='conversationChatBody my-3 px-3'>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                      </div>
                      <div className='conversationText'>
                        <div className=''>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Send Text" />
                          <i className="fa-sharp fa-solid fa-paper-plane bg-primary text-white rounded-circle p-2 ms-3"></i>
                        </div>
                      </div>
                    </div>
                    <div className='conversationChat collapse forPhone' id='collapseConversation'>
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <img className="rounded-circle img-fluid mx-3" src="./images/profile/jacket.jpg" alt=""></img>
                            <Link to="/usersProfile">
                              Farhan Hassan Jabil
                            </Link>
                          </div>
                        </div>
                      </nav>
                      <div className='conversationChatBody my-3 px-3'>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                        <div className='otherChat'>
                          <img className=" img-fluid" src="./images/profile/jacket.jpg" alt="" />
                          <p className='conversationChatBox'>Hi, I need blood</p>
                        </div>
                        <div className='myChat'>
                          <p className='conversationChatBox'>Ok, I wil be right there</p>
                          <img src="./images/profile/jacket.jpg" alt="" />
                        </div>
                      </div>
                      <div className='conversationText'>
                        <div className=''>
                          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Send Text" />
                          <i className="fa-sharp fa-solid fa-paper-plane bg-primary text-white rounded-circle p-2 ms-3"></i>
                        </div>
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
  )
}
