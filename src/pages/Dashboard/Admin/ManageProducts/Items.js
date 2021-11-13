import React from 'react';

const Items = (props) => {
    const { _id, name, price, description, img } = props.product;
    const { handleDelete } = props;

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
                <button onClick={() => handleDelete(_id)} className="buy-btn">Delete</button>
            </div>
        </div>
    );
};

export default Items;