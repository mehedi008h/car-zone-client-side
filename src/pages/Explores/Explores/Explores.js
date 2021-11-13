import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';
import './Explores.css';

const Explores = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-caverns-13881.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <Header></Header>
            <div className="container mb-5">
                <div className="product-info">
                    <h3 className="text-center">Our Products</h3>
                </div>
                <div className="row g-4 mt-4">
                    {
                        products.map(product => <div className="col-md-4">
                            <Product
                                key={product._id}
                                product={product}
                            >
                            </Product>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explores;