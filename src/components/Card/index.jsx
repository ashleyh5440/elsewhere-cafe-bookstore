import React from 'react';
import Button from 'react-bootstrap/Button';
import chestIcon from '/images/chest-icon.png';

import './style.css';

function Card({ title, image }) {
    return (
        <div className="card">
            <div><h2>{title}</h2></div>
            <div className="card-img">
                {image ? <img src={image} alt={title} /> : 'img'}
            </div>
            <Button variant="primary" >
                <img src={chestIcon}/>
                Add to chest
            </Button>
        </div>
    );
}

export default Card;