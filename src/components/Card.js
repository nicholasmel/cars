import React, { useState } from 'react';
import "../styles/Card.css";

function Card({ image, title, model, miles, price, monthly, button }) {
    return (
        <div className='card'>
            <div className='card--border' />
            <img src={image} alt='' />
            <div className='card--info'>
                <h1>{title}</h1>
                <div className='card--info-primary'>
                    <p>{model}</p>
                    <p>{miles}</p>
                </div>
            </div>
            <div className='card--price'>
                <h1>{price}</h1>
                <h2>{monthly}</h2>
            </div>
            <div className='card--button'>
                <button onClick={button}>Purchase Vehicle</button>
            </div>
        </div >
    );
}

export default Card;
