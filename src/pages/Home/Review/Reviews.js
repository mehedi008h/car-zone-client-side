import { Rating } from '@mui/material';
import React from 'react';
import './Review.css';

const Reviews = (props) => {
    const { name, description, rating } = props.review;
    return (
        <div className="review text-center p-4">
            <h4>{name}</h4>
            <Rating name="read-only" value={rating} readOnly />
            <p className="">{description}</p>
        </div>
    );
};

export default Reviews;