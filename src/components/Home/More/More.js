import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Topic from '../Topic/Topic';
import './More.css'

const More = () => {
    return (
        <div >
            <Topic></Topic>
            <div className="m-5">
                <div >
                    <h1 className="client m-5 fw-bold">What <span className="client2"> Clients Say</span></h1>
                </div>
                <Container>

                    <Row>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmt02cPANAAl3b1mAbgdIKsOSTndYxQi-K-w&usqp=CAU" />
                        <Card.Body>

                            <Card.Text>
                            Pet Suites is a great value and very professional. Our dog did an overnight to try out the services and he seemed to love it. We have a longer trip coming up and our dog will be staying for multiple nights. They can administer medication …
                            </Card.Text>
                        </Card.Body>


                    </Card>
                        </Col>
                        <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrkvxzkhP_NGTh1J-YUpP4Fcg5fVdVdFKSoQ&usqp=CAU" />
                        <Card.Body>

                            <Card.Text>
                            I have only been twice now and each time my dog comes back happier than ever. He seems to really enjoy his time there and is always exhausted which is so great to have after a long day of work or errands. Will definitely be taking him back!
                            </Card.Text>
                        </Card.Body>


                    </Card></Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM92gchZFwgY9DYPI4uqS9EpcPOdn1Ma30-Q&usqp=CAU" />
                        <Card.Body>

                            <Card.Text>
                            Good value and accepted my puppy on week's notice for a holiday weekend to take care of family matter. I would gladly pay for grooming next time as she definitely needed a bath after the few days. Appreciative for support provided by the …
                            </Card.Text>
                        </Card.Body>


                    </Card>
                    </Col>
                    </Row>
                </Container>
                

            </div>
        </div>
    );
};

export default More;