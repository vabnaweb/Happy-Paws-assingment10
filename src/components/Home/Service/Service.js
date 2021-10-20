import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {

    const { Id, Service, Details, img } = props.service
    return (
       
        
        <div className="grid img d-flex pb-5 rounded-3">
      

       
           
            <Card>
                <Card.Body>
                    
                    <Card.Title> <div >
                <img src={img} alt="" />
            </div> <h1 className="color">{Service}</h1></Card.Title>
                    <Card.Text>
                        <p>{Details}</p>
                        <Link to={`/details/${Id}`}><button className="color2" >details</button></Link>
                    </Card.Text>
                </Card.Body>




            </Card>
        </div>
       
    )
};

export default Service;