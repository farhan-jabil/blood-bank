import React from 'react'

export default function UsersProfile() {
    return (
        <>
            <div className="siteLayoutMainBody">
                <div className="siteLayoutBody my-3">
                    <div className="usersProfileHeader mb-3">
                        <h5>Profile</h5>
                    </div>
                    <div class="card" >
                        <img src="./images/profile/jacket.jpg" className="card-img-top rounded img-fluid h-25 w-25 d-block m-auto mt-2" alt="..." />
                        <div className='profileButton mx-auto mt-3'>
                        <button type="button" className="btn btn-outline-primary btn-sm mx-3"><i class="fa-solid fa-user-plus me-2"></i>Add Friend</button>
                        <button type='button' className='btn btn-outline-primary btn-sm mx-3'><i class="fa-solid fa-message me-2"></i>Message</button>
                        </div>
                        <div class="card-body">
                            <p class="userProfileInfo card-text p-3">
                                <p><b>Name: </b>Farhan Hassan Jabil</p>
                                <p><b>Blood Type: </b>O+</p>
                                <p><b>Blood Donated: </b>7</p>
                                <p><b>Contact Number: </b>01641991515</p>
                                <p><b>Email: </b>contact@solutya.com</p>
                                <p><b>Website: </b>https://solutya.com/</p>
                                {/* <p><b>Address: </b>Imagine Osman Center, Holding No. 34 (Islami Bank
                          Building, Sonargaon Janapath, Dhaka 1230</p> */}
                          <p><b>Bio: </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Odit aliquam rerum minus. Laborum maiores pariatur vero
                      cum totam officia dolorem laudantium, error enim
                      perferendis neque exercitationem at, asperiores, tempore
                      ullam!</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
