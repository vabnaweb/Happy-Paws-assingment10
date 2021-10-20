import React from 'react';
import './Topic.css'

const Topic = () => {
    return (
        <div className="p-3  px-5  design">
            <row className="d-flex justify-content-between flex-wrap">
            <div >
                <h1><i class="fas fa-thermometer-full"></i>12926</h1>
                  <h5>Vaccinations we done</h5>
            </div>
            <div>
                <h1><i class="far fa-heart"></i>3462</h1>
                <h5>Happy Clients</h5>
            </div>
            <div>
                <h1><i class="fas fa-house-user"></i>15</h1>
                <h5>Departament</h5>
            </div>
            <div>
                <h1><i class="fas fa-trophy"></i>35</h1>
                <h5>Awards We Have</h5>
            </div>
            </row>
        </div>
    );
};

export default Topic;