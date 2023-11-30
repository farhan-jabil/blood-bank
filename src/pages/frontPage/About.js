import React from 'react'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='aboutHeader'>
                <h1>About Us</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt incidunt quae, atque placeat, </span>
            </div>
            <div className='aboutBody'>
                <div className='row'>
                    <div className='aboutText col-lg-6 col-md-12 col-sm-12'>
                        <h2 style={{ color: "grey" }}>About Blood Doners</h2>
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente unde laborum in illo corrupti maiores laboriosam, quisquam animi harum veritatis consectetur voluptate blanditiis quas quia nesciunt itaque explicabo facere tempora?
                            Nam voluptate quod dicta,

                        </span><br />
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente unde laborum in illo corrupti maiores laboriosam, quisquam animi harum veritatis consectetur voluptate blanditiis quas quia nesciunt itaque explicabo facere tempora?

                        </span><br />
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente unde laborum in illo corrupti maiores laboriosam, quisquam animi harum veritatis consectetur voluptate blanditiis quas quia nesciunt itaque explicabo
                        </span><br />
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente unde laborum in illo corrupti maiores laboriosam, quisquam animi harum veritatis consectetur voluptate blanditiis quas quia nesciunt itaque explicabo facere tempora?
                            Nam
                        </span>

                    </div>

                    <div className='aboutImage col-lg-6 col-md-12 col-md-12'>
                        <img src="./images/about/about.jpg" alt="" />
                    </div>

                </div>


            </div>
        </div>
    )
}
