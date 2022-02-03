import React, { useState } from 'react';
import '../styles/Cart.css'

function Cart({ cars, img, title, price, button }) {
    return (
        <div className='cart'>
            <div key={cars.id} className='cart--card' >
                <h1>{title}</h1>
                <img src={img} alt="" />
                <p>Price: {price}</p>
                <button onClick={button}>Remove Vehicle</button>
            </div>
        </div >
    );
}

export default Cart;
