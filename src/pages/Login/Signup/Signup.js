import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button } from '@mui/material';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
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
                            <h3 className="text-center">Signup</h3>
                            <form className="mt-4 d-flex flex-column">
                                <TextField sx={{ width: '100%', marginTop: 3 }} type="text" id="outlined-basic" label="Your Name" variant="outlined" />
                                <TextField sx={{ width: '100%', marginTop: 3 }} type="email" id="outlined-basic" label="Your Email" variant="outlined" />
                                <TextField sx={{ width: '100%', marginTop: 3 }} type="password" id="outlined-basic" label="Your Password" variant="outlined" />
                                <Button sx={{ width: '100%', marginTop: 3 }} variant="contained">Sign in</Button>
                            </form>
                            <p className="text-center mt-3 fw-bold">Already Have An Account? <Link to="/login" style={{ textDecoration: 'none' }} className="">Login</Link></p>
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

export default Signup;