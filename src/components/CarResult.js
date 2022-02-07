import React, { useState } from 'react';
import '../styles/CarResult.css';
import Card from './Card';
import { cars } from '../data';
import Cart from './Cart';
import CloseIcon from '@mui/icons-material/Close';


function CarResult() {
    const [cart, setCart] = useState([]);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(true);
    const leaveSidebar = () => setSidebar(false);

    const addToCart = (cars) => {
        setCart([...cart, { ...cars }]);
        showSidebar();
    };

    const removeFromCart = (carsToRemove) => {
        setCart(cart.filter(cars => cars !== carsToRemove));
    }

    let price = 0;

    const currencyFormat = (price) => {
        return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className='results'>
            <div className="results--banner">
                <p>RESULTS: {cars.length}</p>
                <div className={sidebar ? 'results--banner-right-active' : 'results--banner-right'}>
                    <h4>LOCATION:</h4>
                    <p>PEORIA, AZ</p>
                    <h4>SORT BY:</h4>
                    <p>RECOMMENDED</p>
                </div>
            </div>
            <div className={sidebar ? 'car-active' : 'car'}>
                {cars.map((car, id) => (
                    <Card key={id} image={car.img} title={car.title} model={car.model} miles={car.miles} price={car.price} monthly={car.monthly} button={() => addToCart(car)} />
                ))}
            </div>
            <div className={sidebar ? 'cart--item-active' : 'cart--item'}>
                <div className='cart--close' onClick={leaveSidebar}>
                    <CloseIcon sx={{ fontSize: '50px', color: 'white' }} />
                </div>
                <h1>Shopping Cart</h1>
                <div className='cart--item-card'>
                    {cart.map((car, id) => (
                        (price += car.price),
                        <Cart key={id} cars={cart} img={car.img2} title={car.title} model={car.model} price={car.price} button={() => removeFromCart(car)} />
                    ))}
                </div>
                <div className='cart--total'>
                    <h1>Subtotal({cart.length}): {currencyFormat(price)}</h1>
                </div>
            </div>
            <hr />

        </div >

    );
}

export default CarResult;
