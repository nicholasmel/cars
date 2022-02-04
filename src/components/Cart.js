import React from 'react';
import '../styles/Cart.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart({ cars, img, title, model, price, button }) {
    let formatPrice = '$' + price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    return (
        <div className='cart'>
            <div key={cars.id} className='cart--card' >
                <h1>{title}</h1>
                <h2>{model}</h2>
                <img src={img} alt="" />
                <p>Price: {formatPrice}</p>
                <IconButton aria-label="delete" size="large" onClick={button}>
                    <DeleteIcon fontSize="inherit" htmlColor='#7986cb' />
                </IconButton>
            </div>
        </div >
    );
}

export default Cart;
