import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img from '../../images/health-logo-removebg-preview.png'
import { HashLink } from 'react-router-hash-link';
import './Header.css'

import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <div className=" container justify-content-between w-name d-flex" sticky="top">
                <div className="d-lg-flex mt-3 " >
                    <img src={img} alt="" />
                    <div>
                        <h1 className="logo-name">Happy <span className="tag-color" >Paws</span></h1>
                        <p className="tag-style">VETENERY CLINIC</p>
                    </div>
                </div>
                <div className="d-lg-flex mx-auto mt-3 pb-0 ">
                    <div className="pe-5"><p> <i className="fas fa-map-marker-alt font"></i> Our Location<br /><span className="tag-color">2418 Nancy St, New York</span></p></div>
                    <div className="pe-5"><p> <i className="far fa-clock font"></i> We are Open<br /><span className="tag-color">08:00 - 21:00</span></p></div>
                    <div className="pe-5"> <p> <i className="fas fa-phone-volume font"></i> Call us Now<br /><span className="tag-color">0 (700) 367 9737</span></p></div>
                </div>
            </div>
            <Navbar bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>


                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav.Link as={HashLink} to="/home#home" className="text-light fw-bold">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services#services" className="text-light fw-bold">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/contract#contract" className="text-light fw-bold">Contract</Nav.Link>
                        <Nav.Link as={Link} to="/more#more" className="text-light fw-bold">More</Nav.Link>
                    </Navbar.Collapse>

                    <Nav className="me-auto justify-content-end text-white">
                        {
                            user?.email ?
                                <div> <Button className="bg-light text-dark" onClick={logOut}>LogOut</Button>
                                    Signed in as: <span>{user?.displayName}</span>
                                </div> :
                                <Nav.Link as={Link} to="/login" className="text-light fw-bold">SignIn</Nav.Link>
                        }

                       


                    </Nav>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;