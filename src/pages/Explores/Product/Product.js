import React from 'react';
import { useHistory } from "react-router-dom";
import './Product.css';

const Product = (props) => {
    const { _id, name, price, description, img } = props.product;

    let history = useHistory();

    const handleOrder = () => {
        history.push(`/place-order/${_id}`);
    }
    return (
        <div>
            <div className="product">
                <div className="p-3">
                    <div className="text-center mt-2">
                        <img src={img} height="176" width="300px" alt="" />
                    </div>
                    <div className="mt-4">
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <h5>{price}</h5>
                    </div>
                </div>
                <button onClick={handleOrder} className="buy-btn">Purchase</button>
            </div>
        </div>
    );
};

export default Product;