import React, { useState } from 'react';
import '../styles/CarResult.css';
import Card from './Card';
import { cars } from '../data';
import Cart from './Cart';


function CarResult() {
    const [cart, setCart] = useState([]);

    const addToCart = (cars) => {
        setCart([...cart, { ...cars }]);
    };

    const removeFromCart = (carsToRemove) => {
        setCart(cart.filter(cars => cars != carsToRemove));
    }

    let price = 0;

    const currencyFormat = (price) => {
        return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className='results'>
            <div className='car'>
                {cars.map((car, id) => (
                    <Card key={id} image={car.img} title={car.title} model={car.model} miles={car.miles} price={car.price} monthly={car.monthly} button={() => addToCart(car)} />
                ))}
            </div>
            <div className='cart'>
                <h1>This is Cart</h1>
                {cart.map((car, id) => (
                    (price += car.price),
                    <Cart cars={cart} img={car.img2} title={car.title} model={car.model} price={car.price} button={() => removeFromCart(car)} />
                ))}
            </div>
            <div><h1>Total: {currencyFormat(price)}</h1></div>
        </div>

    );
}

export default CarResult;
