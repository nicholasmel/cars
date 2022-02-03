import React, { useState } from 'react';
import '../styles/Cart.css'

function Cart({ cars, img, title, model, price, button }) {
    let formatPrice = '$' + price.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    return (
        <div className='cart'>
            <div key={cars.id} className='cart--card' >
                <h1>{title}</h1>
                <h2>{model}</h2>
                <img src={img} alt="" />
                <p>Price: {formatPrice}</p>
                <button onClick={button}>Remove Vehicle</button>
            </div>
        </div >
    );
}

export default Cart;
