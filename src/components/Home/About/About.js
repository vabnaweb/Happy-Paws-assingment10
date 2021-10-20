import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img from '../../../images/a_img5-removebg-preview.png'
import './About.css'
const About = () => {
    return (
        <>
       <Container>
       <Row className="mt-5 " xs={1} md={2}>
             <div className="pb-5 pic ">
                 <img src={img} alt="" />
             </div>
             <div className="mt-5 pt-5">
                  <h1 className="fw-bold">About <span className="clinic">Clinic</span></h1>
                  <h5 className="pets">Pets Best Friends</h5>
                
                  <p> Our veterinary clinic is a full-service hospital. Services we provide include dentistry and dental digital imagining, spays and neuters, general and orthopedic surgery, digital imaging and ultrasonography, pain control, pharmacy-prescriptions and vaccinations. Evening, emergency and Saturday appointments available.Choosing a new veterinary clinic is an important decision so if you would like to meet Dr. Fulop, Dr. Mak or our terrific team or tour our veterinary clinic give us a call and we would love to answer any questions and meet you and your pet.</p>
             </div>
        </Row>
       </Container>
        </>
    );
};

export default About;