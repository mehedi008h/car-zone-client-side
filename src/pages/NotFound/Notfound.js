import React from 'react';
import './Notfound.css';
import notFound from '../../image/404.png';
import Header from '../Shared/Header/Header';

const Notfound = () => {
    return (
        <div className="mb-5">
            <Header></Header>
            <div className="text-center">
                <img className="w-50" style={{ marginTop: 100 }} src={notFound} alt="" />
                <h3 className="mt-3 error">Page Not Found</h3>
            </div>
        </div>
    );
};

export default Notfound;