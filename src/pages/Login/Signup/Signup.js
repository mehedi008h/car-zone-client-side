import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button } from '@mui/material';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Header from '../../Shared/Header/Header';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const { signInWithGoogle, isLoading, authError, registerUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="login-card">
                            <h3 className="text-center">Signup</h3>
                            {!isLoading &&
                                <form onSubmit={handleLoginSubmit} className="mt-4 d-flex flex-column">
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="name"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="text" id="outlined-basic"
                                        label="Your Name"
                                        variant="outlined" />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="email"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="email" id="outlined-basic"
                                        label="Your Email"
                                        variant="outlined" />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="password"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="password" id="outlined-basic"
                                        label="Your Password"
                                        variant="outlined" />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="password2"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="password" id="outlined-basic"
                                        label="Your Password"
                                        variant="outlined" />
                                    <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Sign in</Button>
                                </form>
                            }

                            <p className="text-center mt-3 fw-bold">Already Have An Account? <Link to="/login" style={{ textDecoration: 'none' }} className="">Login</Link></p>
                            <hr />
                            <div className="text-center">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline-danger"><FontAwesomeIcon className="me-3" icon={faGoogle}></FontAwesomeIcon>Login with google</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;