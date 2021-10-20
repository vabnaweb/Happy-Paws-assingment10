import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const {serviceId}=useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        
        <div className="service">
            <div className="mb-5 mt-5 pt-5" >
                <h1 className="set1">Our <span className="set3">Services </span>&<span className="set3"> Procedures</span></h1>
                <p className="set2" >COMPASSIONATE AND HIGH QUALITY CARE</p>
            </div>
            <Container>

                <Row xs={12} md={2} lg={3}>
                    
                        {
                          services.map(service=><Service
                            key={service.Id}  service={service}
                          
                          ></Service>)
                        }
                        
                  
                    
                </Row>
            </Container>
        </div>
      

    );
};

export default Services;