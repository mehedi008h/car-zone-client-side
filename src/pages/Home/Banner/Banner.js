import React from 'react';
import './Banner.css';
import bannerbg from '../../../image/home-img.png';

const Banner = () => {
    return (
        <div className="banner d-flex">
            <div className="container">
                <div className="banner-info">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="w-75 mx-auto">
                                <h1>Find Your desire car as Motoro makes it easy</h1>
                                <p className="text-white">The Civic ran away with this comparison. It outclasses the Corolla in almost every way we can think of.</p>
                                <button className="btn btn-info btn-sm">Learn More</button>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="text-center">
                                <img width="90%" src={bannerbg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;