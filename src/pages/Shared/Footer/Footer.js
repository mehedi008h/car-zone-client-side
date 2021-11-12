import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer d-flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5 mb-3">
                        <div className="w-75 mx-auto">
                            <img className="w-25" src="" alt="" />
                            <div className="mt-3">
                                <h3 className="text-white">Skypro TourX</h3>
                                <p className="text-success">We provide best Doctors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="w-75 mx-auto">
                                    <h5 className="text-white">Service</h5>
                                    <ul className="text-white">
                                        <li>Conditions</li>
                                        <li>Term of Use</li>
                                        <li>Our Service</li>
                                        <li>New Guest List</li>
                                        <li>The Team List</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="w-75 mx-auto">
                                    <h5 className="text-white">Useful Links</h5>
                                    <ul className="text-white">
                                        <li>Conditions</li>
                                        <li>Term of Use</li>
                                        <li>Our Service</li>
                                        <li>New Guest List</li>
                                        <li>The Team List</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-white">&copy; Skypro TourX 2021 | All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;