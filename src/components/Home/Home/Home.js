import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/d img2.jpg'
import img2 from '../../../images/a img3.jpg'
import img3 from '../../../images/a img4.jpg'
import Services from '../Services/Services';
import About from '../About/About';
import './Home.css'
import Topic from '../Topic/Topic';
const Home = () => {
  return (
    <div >
      <div>
        <Carousel  >
          <Carousel.Item >
            <img
              className="d-block w-100 "
              src={img1}
              alt="First slide" height="650px"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide" height="650px"
            />

           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide" height="650px"
            />

            
          </Carousel.Item>
        </Carousel>
      </div>
      <About></About>
      <Topic></Topic>

      <div><Services></Services></div>

    </div>
  );
};

export default Home;