import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEdit, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import './Order.css';

const Order = (props) => {
    const { _id, productName, address, date, email, phone, productImg, productPrice, userName, status } = props.order;
    const { handleDelete } = props;
    const { admin } = useAuth();
    return (
        <div>
            <div className="order-item">
                <div className="row g-2">
                    <div className="col-md-1 text-center">
                        <img src={productImg} height="70px" width="90px" alt="" />
                    </div>
                    <div className="col-md-10">
                        <h4>{productName}</h4>
                        <div className="row mt-2">
                            <div className="col-md-3">
                                <p> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {userName}</p>
                            </div>
                            <div className="col-md-3">
                                <p> <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {date}</p>
                            </div>
                            <div className="col-md-3">
                                <p> <FontAwesomeIcon icon={faPaypal}></FontAwesomeIcon> {productPrice}</p>
                            </div>
                            <div className="col-md-3">
                                <p> <FontAwesomeIcon icon={faPaypal}></FontAwesomeIcon> {status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        {admin ?
                            <button className="btn btn-outline-info w-100 btn-sm">Update</button> :
                            <button className="btn btn-outline-info w-100 btn-sm">View</button>
                        }

                        <button onClick={() => handleDelete(_id)} className="btn btn-outline-danger w-100 btn-sm mt-1">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;