import { Box } from '@mui/system';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="mb-5">
            <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img className="me-2" src="" alt="" /></Navbar.Brand>
                    <Navbar.Brand as={Link} to="/">Car Zone</Navbar.Brand>
                    <Navbar.Toggle className="text-dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="text-dark" id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="me-3">Home</Nav.Link>
                            <Nav.Link as={Link} to="/explore" className="me-3">Explore</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard" className="me-3">Dashboard</Nav.Link>

                            {user?.email ?
                                <Box>
                                    <img className="user-img me-2" src={user?.photoURL} alt="" />
                                    <Link to="/login" className="link">{user?.displayName}</Link>
                                    <Button onClick={logOut} variant="success" className="logout text-white me-2 text-success">Logout</Button>
                                </Box> :
                                <Box>
                                    <Nav.Link as={Link} to="/login" className="me-3">Login</Nav.Link>
                                </Box>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;