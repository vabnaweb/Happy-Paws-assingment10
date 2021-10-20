import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Contract .css'
const Contract = () => {
    return (
        <div className="mx-auto from mb-5 mt-5">
            <div className="pt-5" > 
                <h1 className="fw-bold text-center">Please  Fill Up</h1>
                </div>
            <Form className="m-5 fw-bold pb-5">
  <Row >
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>pet</Form.Label>
      <Form.Control type="text" placeholder="" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    

    
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <button className="button1" type="submit">
    Submit
  </button>
</Form>
        </div>
    );
};

export default Contract;