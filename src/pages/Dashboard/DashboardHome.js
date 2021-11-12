import React from 'react';
import useAuth from '../../hooks/useAuth';
import img from './../../image/home-img.png';
import './Dashboard.css';

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <div>
            <div className="container">
                <div className="text-center mt-5">
                    <img width="80%" src={img} alt="" />
                </div>
                <div className="dashboard-text">
                    <h3>Welcome to {admin ? <span>Admin</span> : <span>User</span>} Dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;