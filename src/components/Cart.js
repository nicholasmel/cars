import React, { useState } from 'react';

function Cart({ cars, img, button }) {
    return (
        <div className='cart'>
            <div key={cars.id} className='cart--card' >
                <img src={img} alt="" />
                <button onClick={button}>Remove</button>
            </div>
        </div >
    );
}

export default Cart;
