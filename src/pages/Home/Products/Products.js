import React, { useEffect, useState } from 'react';
import Product from '../../Explores/Product/Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    const item = products.slice(0, 6);

    useEffect(() => {
        fetch('https://sleepy-caverns-13881.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <div className="container">
                <div className=" mt-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3 className="text-center">Our Products</h3>
                        <Link to={'/explore'} className="btn btn-outline-info  fw-bold">Explore More</Link>
                    </div>

                </div>
                <div className="row g-4 mt-4">
                    {
                        item.map(product => <div className="col-md-4">
                            <Product
                                key={product._id}
                                product={product}
                            >
                            </Product>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;