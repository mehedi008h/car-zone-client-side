import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { displayName, email } = user;
    const initialInfo = { name: user.displayName, email: user.email, description: '', rating: '' }
    const [reviewInfo, setReviewInfo] = useState(initialInfo);

    let history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }
    const handleAddReview = e => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Item Added Successfully!", "success");
                    e.target.reset();
                    history.push('/home');
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="login-card">
                    <h3 className="text-center">Add Review</h3>
                    <form onSubmit={handleAddReview} className="mt-4 d-flex flex-column">
                        <TextField
                            onBlur={handleOnBlur}
                            name="name"
                            value={displayName}
                            sx={{ width: '100%', marginTop: 3 }}
                            type="text" id="outlined-basic"
                            label="Your Name" variant="outlined" />
                        <TextField
                            onBlur={handleOnBlur}
                            value={email}
                            name="email"
                            sx={{ width: '100%', marginTop: 3 }}
                            type="email" id="outlined-basic"
                            label="Your Email" variant="outlined" />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '100%', marginTop: 3 }}
                            name="description"
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name="rating"
                            sx={{ width: '100%', marginTop: 3 }}
                            type="number" id="outlined-basic"
                            label="Your Rating" variant="outlined" />
                        <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Add Review</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;