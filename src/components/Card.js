import React from 'react';
import "../styles/Card.css";
import Button from '@mui/material/Button';

function Card({ image, title, model, miles, price, monthly, button }) {
    const rate = 0.01819509;
    let formatPrice = '$' + price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    let formatMonthly = 'Est. $' + (price * rate).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '/mo*'

    return (
        <div className='card'>
            <div className='card--border' />
            <img src={image} alt='' />
            <div className='card--info'>
                <h1>{title}</h1>
                <div className='card--info-primary'>
                    <h4>{model}</h4>
                    <p>{miles}</p>
                </div>
            </div>
            <div className='card--price'>
                <h1>{formatPrice}</h1>
                <h2>{formatMonthly}</h2>
            </div>
            <div className='card--button'>
                <Button variant='contained' onClick={button}>Add Vehicle</Button>
            </div>
        </div >
    );
}

export default Card;
