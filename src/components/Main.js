import React, { useState } from 'react';
import { FaCar, FaCheck } from 'react-icons/fa';
import UsersNav from './UsersNav';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
    const image = require('./Car/black-car.jpg');
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const handleClick = () => {
        Axios.post("https://backend-2-zd1q.onrender.com/contactRoute/create-contact", {name, email, message})
            .then((res) => {
                if (res.status === 200) {
                    alert("We will reach you out soon through email.");
                    navigate("/");
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <div className='bg-black'>
            <UsersNav />
            <div className="container mb-0" id="home">
                <div className="row d-flex align-items-center">
                    <div className="col-6 text-center">
                        <p className="text-light fw-bolder" style={{ fontSize: "70px" }}>CarConnect</p>
                        <p className="text-light text-center fs-5">Your journey starts here.</p>
                    </div>
                    <div className="col-6">
                        <img src={image} alt="black car" style={{ width: 700 }} />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6 text-white text-center fs-1 fw-semibold pt-0">
                        CarConnect <br /> Car Rental
                    </div>
                    <div className="col-6 text-white fs-3 pt-2 text-center">
                        <p className='text-left'>Drive your dream car with a car rental from<br />CarConnect. Drive away to your location in style.</p>
                        <p className='tex-center'><Link to={"/login"}><button className="btn btn-primary px-3 py-2 fw-bold text-light m-1 btn-hover">Login / Register</button></Link></p>
                        <br /><br />
                    </div>
                </div>
                <div>
                    <div className="card" style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                        <div className='m-5 card-body'>
                        
                                <div className="about-section" style={{ borderRadius: '30px' }}>
                                    <div className='mb-3'>
                                        <FaCar icon="car" className="fa-icon mb-3" size="26px" />
                                        <span className=' fw-bolder h2 pt-2'> About CarConnect</span>
                                    </div>

                                    <div className="lh-lg mb-3">
                                        <span>CarConnect is a leading car rental company in Hyderabad, India. We offer a wide range of cars to rent, from economy cars to luxury cars. We are also the only car rental company in Hyderabad that offers a 24/7 customer support service.</span><br/><br/>

                                        <span>Our mission is to provide our customers with the best possible car rental experience. We believe that renting a car should be easy, convenient, and affordable. That's why we offer a wide range of cars to rent, at competitive prices. We also offer a variety of rental options, including hourly, daily, weekly, and monthly rentals.</span><br/><br/>

                                        <span>We are committed to providing our customers with the highest level of customer service. We have a team of experienced and knowledgeable staff who are always available to help our customers with their car rental needs. We also offer a 24/7 customer support service, so you can always reach us if you have any questions or concerns.</span><br/>
                                    </div>

                                    <div className="">
                                        <h2 className='fw-bold mb-4'>Why Choose CarConnect?</h2>

                                        <ul className='list-unstyled'>
                                            <li className='m-3'><FaCheck icon="check" className="fa-icon" /> We offer a wide range of cars to rent, from economy cars to luxury cars.</li>
                                            <li className='m-3'><FaCheck icon="check" className="fa-icon" /> We are the only car rental company in Hyderabad that offers a 24/7 customer support service.</li>
                                            <li className='m-3'><FaCheck icon="check" className="fa-icon" /> We have a team of experienced and knowledgeable staff who are always available to help our customers.</li>
                                            <li className='m-3'><FaCheck icon="check" className="fa-icon" /> We offer a variety of rental options, including hourly, daily, weekly, and monthly rentals.</li>
                                            <li className='m-3'><FaCheck icon="check" className="fa-icon" /> We are committed to providing our customers with the best possible car rental experience.</li>
                                        </ul>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-light">
                    <div className='px-5 mb-0 mx-5' id='contact'>
                        <h2 className='text-center'>Contact us</h2>
                        <div>
                            <form onSubmit={handleClick}>
                                <div>
                                    <label htmlFor="name" className='form-label'>Name</label>
                                    <input className='form-control' type="text" id="name" name="name" required onChange={(event) => setName(event.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <input type="email" id="email" name="email" className='form-control' required onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="message" className='form-label'>Message</label>
                                    <textarea id="message" name="message" rows="4" className='form-control' required onChange={(event) => setMessage(event.target.value)}></textarea>
                                </div>
                                <p className='text-center'><button type='submit' className='btn btn-warning m-4'>Send Message</button></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;