import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import swal from 'sweetalert';
import admin from '../../../../image/unauthorized-person.png';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://sleepy-caverns-13881.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("Good job!", "Make Admin Successfully!", "success");
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <div className="container text-center">
                <div className="text-center mb-5">
                    <img width="20%" src={admin} alt="" />
                </div>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <Button sx={{ marginTop: 5 }} type="submit" variant="contained">Make Admin</Button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;