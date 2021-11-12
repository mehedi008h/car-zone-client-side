import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({});
    const { displayName, email } = user;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...review };
        newLoginData[field] = value;
        setReview(newLoginData);
    }
    const handleAddReview = e => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Item Added Successfully!", "success");
                    e.target.reset();

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
                            type="text" id="outlined-basic"
                            label="Your Rating" variant="outlined" />
                        <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Sign in</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;