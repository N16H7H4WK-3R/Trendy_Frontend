import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';

function MainNavbar() {
    const [isComponentLoaded, setIsComponentLoaded] = useState(false);
    const location = useLocation();
    const firstName = location.state?.firstName || ' Login';

    const Login = () => {
        setIsComponentLoaded(true);
    };

    return (
        <>
            {isComponentLoaded}
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Trendy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <a className="nav-link" href="/cart">
                                <i className="fa fa-shopping-cart"></i> Cart (0)
                            </a>
                            <a className="nav-link" href="/wishlist">
                                <i className="fa fa-heart"></i> Wishlist (0)
                            </a>
                            <NavDropdown title={<><i className="fa fa-user"> </i> {firstName}</>} id="collapsible-nav-dropdown" style={{textTransform: 'initial'}}>
                                <li><a className="dropdown-item" href="/editProfile"><i className="fa fa-user"></i> Edit Profile</a></li>
                                <li><a className="dropdown-item" href="/"><i className="fa fa-list"></i> My Orders</a></li>
                                <li><a className="dropdown-item" onClick={Login} href="/login"><i className="fa fa-sign-out"></i> Login</a></li>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MainNavbar;