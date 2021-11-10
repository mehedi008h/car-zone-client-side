import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button } from '@mui/material';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="login-card">
                            <h3 className="text-center">Login</h3>
                            <form className="mt-4 d-flex flex-column">
                                <TextField sx={{ width: '100%', marginTop: 3 }} type="email" id="outlined-basic" label="Your Email" variant="outlined" />
                                <TextField sx={{ width: '100%', marginTop: 3 }} type="password" id="outlined-basic" label="Your Password" variant="outlined" />
                                <Button sx={{ width: '100%', marginTop: 3 }} variant="contained">Sign in</Button>
                            </form>
                            <p className="text-center mt-3 fw-bold">Dont Have Account? <Link to="/signup" style={{ textDecoration: 'none' }} className="">Sign Up</Link></p>
                            <hr />
                            <div className="text-center">
                                <button onClick={handleGoogleLogin} className="btn btn-outline-danger"><FontAwesomeIcon className="me-3" icon={faGoogle}></FontAwesomeIcon>Login with google</button>
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