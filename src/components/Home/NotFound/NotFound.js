import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../../images/5203299.jpg'
const NotFound = () => {
    return (
        <div className="ms-5 ps-5">
            <img className="w-50 ms-5 ps-5" src={image} alt="" />
            <Link to="/home"><Button  variant="dark" > Go Back</Button></Link>
        </div>
        
    );
};

export default NotFound;