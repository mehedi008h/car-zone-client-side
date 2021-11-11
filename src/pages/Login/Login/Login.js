import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInWithGoogle, isLoading, authError, loginUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <Header></Header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="login-card">
                            <h3 className="text-center">Login</h3>
                            <form onSubmit={handleLoginSubmit} className="mt-4 d-flex flex-column">
                                <TextField
                                    onChange={handleOnChange}
                                    name="email"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="email" id="outlined-basic"
                                    label="Your Email" variant="outlined" />
                                <TextField
                                    onChange={handleOnChange}
                                    name="password"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="password" id="outlined-basic"
                                    label="Your Password" variant="outlined" />
                                <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Sign in</Button>
                            </form>
                            <p className="text-center mt-3 fw-bold">Dont Have Account? <Link to="/signup" style={{ textDecoration: 'none' }} className="">Sign Up</Link></p>
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

export default Login;