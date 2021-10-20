
import React, { useEffect, useState } from 'react';
import { Card ,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const perdetails = data.find(topics => topics.Id == serviceId)
                setDetails(perdetails)
            })
    }, [serviceId])
    return (
        <div className="d-flex justify-content-center m-5">
           <Card className="align-items-start" style={{ width: '40rem' }}>
  <Card.Img variant="top" src={details.DrImg} />
  <Card.Body>
    <Card.Title><h1>{details.Service}</h1></Card.Title>
    <Card.Text>
           <p> ServiceDetails:{details.Details}</p>
           <h3>Consultant : {details.DoctorName}</h3>
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Card.Link as={Link} to ={'/contract'}><Button>Get appoinment</Button></Card.Link>
   
  </Card.Body>
</Card>
        </div>
    );
};

export default Details;