import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Order from './Order';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        fetch('https://sleepy-caverns-13881.herokuapp.com/manageOrder')
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
                    const url = `https://sleepy-caverns-13881.herokuapp.com/manageOrder/${id}`;
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
            <h3 className="text-center">Total Order {orders.length}</h3>
            <div className="container">
                {
                    orders.map(order => <Order
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

export default ManageOrders;