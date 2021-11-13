import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {
        fetch('https://sleepy-caverns-13881.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h3 className="text-center mb-5 fw-bold">Our Customer Review</h3>
                <div className="row g-3">
                    {
                        reviews.map(review =>
                            <div className="col-md-3">
                                <Reviews
                                    key={review._id}
                                    review={review}
                                >
                                </Reviews>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;