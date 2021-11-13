import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
import Order from '../../Admin/ManageOrders/Order';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/manageOrder')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            });
    }, []);
    const handleDelete = id => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "You want to delete this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `http://localhost:5000/manageOrder/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount) {
                                swal("Poof! Your file has been deleted!", {
                                    icon: "success",
                                });
                                const remainingOrder = orders.filter(order => order._id !== id);
                                setOrders(remainingOrder);
                            }
                        })

                } else {
                    swal("Your file is safe!");
                }
            });

    }
    return (
        <div>
            <h3 className="text-center">My Order</h3>
            <div className="container">
                {
                    orders.filter((myorder) => myorder.email === user.email).map(order => <Order
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                    >
                    </Order>)
                }
            </div>
        </div>
    );
};

export default MyOrder;