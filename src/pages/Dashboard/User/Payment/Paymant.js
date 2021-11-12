import React from 'react';
import payment from '../../../../image/debit-card.png';

const Paymant = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <img width="20%" src={payment} alt="" />
                <h3 className="mt-4 fw-bold">Payment system coming soon</h3>
            </div>
        </div>
    );
};

export default Paymant;