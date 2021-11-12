import React from 'react';
import './Brand.css';

const Brands = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h3 className="text-center fw-bold">Top Brands</h3>
                <div className="row g-3 mt-3">
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/QJdbqK2/Bentley.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/W316vhM/bmw.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/7Xj9H5W/ferrari.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/gm8cQ6Y/honda.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/QQnsGtc/toyota.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/znZVZVD/tesla.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/KVJ42qj/porsche.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="brand text-center">
                            <img src="https://i.ibb.co/ZHsgz8b/lamborghini.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;