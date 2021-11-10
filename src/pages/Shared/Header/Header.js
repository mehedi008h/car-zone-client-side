import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <Nav.Link as={Link} to="/login" className="me-3">Login</Nav.Link>
                            <Nav.Link as={Link} to="/home" className="me-3">Signup</Nav.Link>
                            {/* <Nav.Link as={Link} className="user-name me-2 text-light">{user?.displayName}</Nav.Link>
                            <Nav.Link as={Link} to="/signup" className="signup me-2 text-light">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="signup me-2 text-light">Login</Nav.Link>
                            <Button onClick={logOut} variant="success" className="text-white me-2 text-success">Logout</Button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;