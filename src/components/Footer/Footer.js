import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer text-center fw-bold mt-5" fixed="bottom">
            <p>copyright issue &copy; Happy-Paws.com 2021</p>
            <Container>
            <Row className="mt-5 pb-5 " xs={1} md={2} lg={3} >
                    <div className="pe-5"><p> <i className="fas fa-map-marker-alt font"></i> Our Location<br /><span className="tag-color">2418 Nancy St, New York</span></p></div>
                    <div className="pe-5"><p> <i className="far fa-clock font"></i> We are Open<br /><span className="tag-color">08:00 - 21:00</span></p></div>
                    <div className="pe-5"> <p> <i className="fas fa-phone-volume font"></i> Call us Now<br /><span className="tag-color">0 (700) 367 9737</span></p></div>
                </Row>
                </Container>
                </div>
    );
};

export default Footer;