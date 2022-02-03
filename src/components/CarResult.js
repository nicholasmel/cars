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

    return (
        <div>
            <div className='car'>
                {cars.map((car, id) => (
                    <Card key={id} image={car.img} title={car.title} model={car.model} miles={car.miles} price={car.price} monthly={car.monthly} button={() => addToCart(car)} />
                ))}
            </div>
            <div className='cart'>
                <h1>This is Cart</h1>
                {cart.map((car, id) => (
                    <Cart cars={cart} img={car.img} button={() => removeFromCart(car)} />
                ))}
            </div>
        </div>

    );
}

export default CarResult;
