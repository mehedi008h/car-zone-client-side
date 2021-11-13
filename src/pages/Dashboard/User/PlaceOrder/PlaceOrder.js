import { TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../../Shared/Header/Header';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const { name, img, price } = productDetails;
    const { user } = useAuth();
    const initialInfo = { userName: user.displayName, email: user.email, address: '', phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    let history = useHistory();

    let date = new Date();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        // collect data
        const order = {
            ...orderInfo,
            productImg: img,
            productName: name,
            productPrice: price,
            status: 'pending',
            date: date.toLocaleDateString()
        }
        // send to the server
        fetch('http://localhost:5000/place-order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Your Order Placed Successfully!", "success");
                    e.target.reset();
                    history.push('/dashboard/myOrder');
                }
            });

        e.preventDefault();
    }

    useEffect(() => {
        fetch(`http://localhost:5000/place-order/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data));
    }, [id])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="product-details">
                            <div className="text-center">
                                <img src={productDetails.img} alt="" />
                            </div>
                            <div className="mt-4 text-center">
                                <h3>{productDetails.name}</h3>
                                <p>{productDetails.description}</p>
                                <h5>$ {productDetails.price}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="login-card">
                            <h3 className="text-center">Place Order</h3>
                            <form onSubmit={handleOrderSubmit} className="mt-4 d-flex flex-column">
                                <TextField
                                    onBlur={handleOnBlur}
                                    value={user.displayName}
                                    name="name"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="text" id="outlined-basic"
                                    label="Name" variant="outlined" />

                                <TextField
                                    onBlur={handleOnBlur}
                                    value={user.email}
                                    name="price"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="text" id="outlined-basic"
                                    label="Email" variant="outlined" />
                                <TextField
                                    onBlur={handleOnBlur}
                                    name="address"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="text" id="outlined-basic"
                                    label="Address" variant="outlined" />
                                <TextField
                                    onBlur={handleOnBlur}
                                    name="phone"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="text" id="outlined-basic"
                                    label="Phone" variant="outlined" />
                                <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Purchase</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;