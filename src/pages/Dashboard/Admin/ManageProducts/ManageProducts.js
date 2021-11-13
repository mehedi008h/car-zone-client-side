import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Items from './Items';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-caverns-13881.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
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
                    const url = `https://sleepy-caverns-13881.herokuapp.com/manageProduct/${id}`;
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
                                const remainingProduct = products.filter(product => product._id !== id);
                                setProducts(remainingProduct);
                            }
                        })

                } else {
                    swal("Your file is safe!");
                }
            });

    }
    return (
        <div>
            <div className="container">
                <div className="row g-3">
                    {
                        products.map(product => <div className="col-md-4">
                            <Items
                                key={product._id}
                                product={product}
                                handleDelete={handleDelete}
                            >
                            </Items>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageProducts;