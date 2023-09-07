import React, { useEffect, useState } from 'react';
import '../styles/CarResult.css';
import Card from './Card';
import { cars } from '../data';
import Cart from './Cart';
import Navbar from './Navbar';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CarResult() {
    const [cart, setCart] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const [term, setTerm] = useState(1);
    const [array, setArray] = useState(cars);

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

    const handleTermChange = (event) => {
        setTerm(event.target.value);
        var carDefault = cars;
        let sort = cars;
        switch (event.target.value) {
            case 2:
                sort = cars.sort((date1, date2) => date2.date - date1.date);
                break;
            case 3:
                sort = cars.sort((date1, date2) => date1.date - date2.date);
                break;
            case 4:
                sort = cars.sort((date1, date2) => date1.price > date2.price);
                break;
            case 5:
                sort = cars.sort((date1, date2) => date1.price < date2.price);
                break;
            default:
                sort = cars.sort((date1, date2) => date2.date - date1.date);
        }
        setArray(sort);
    };

    return (
        <div className='results'>
            <div className="results--title">
                <h1>EXPLORE INVENTORY</h1>
            </div>
            <div className="results--banner">
                <p>RESULTS: {cars.length}</p>
                <div className={sidebar ? 'results--banner-right-active' : 'results--banner-right'}>
                    <h4>LOCATION:</h4>
                    <p>PEORIA, AZ</p>
                    <h4 className='sort'>SORT BY:</h4>
                    <div>
                        <FormControl sx={{ m: 1, width: '12vw' }}>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={term}
                                label="Term"
                                onChange={handleTermChange}
                                sx={{ backgroundColor: 'white', textAlign: 'left', height: '18px', fontSize: '12px' }}
                            >
                                <MenuItem value={1} sx={{ visibility: 'none' }}></MenuItem>
                                <MenuItem value={2} sx={{ fontSize: '12px' }}>YEAR (NEWEST)</MenuItem>
                                <MenuItem value={3} sx={{ fontSize: '12px' }}>YEAR (OLDEST)</MenuItem>
                                <MenuItem value={4} sx={{ fontSize: '12px' }}>PRICE (LOW-HIGH)</MenuItem>
                                <MenuItem value={5} sx={{ fontSize: '12px' }}>PRICE (HIGH-LOW)</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className={sidebar ? 'car-active' : 'car'}>
                {array.map((car, id) => (
                    <Card key={id} image={car.img} title={car.title} model={car.model} miles={car.miles} price={car.price} monthly={car.monthly} date={car.date} button={() => addToCart(car)} />
                ))}
            </div>
            <div className={sidebar ? 'cart--item-active' : 'cart--item'}>
                <div className='cart--close' onClick={leaveSidebar}>
                    <CloseIcon sx={{ fontSize: '50px', color: 'gray' }} />
                </div>
                <h1>Cart</h1>
                <div className='cart--item-card'>
                    {cart.map((car, id) => (
                        (price += car.price),
                        <Cart key={id} cars={cart} img={car.img2} title={car.title} model={car.model} price={car.price} button={() => removeFromCart(car)} />
                    ))}
                </div>
                <div className='cart--total'>
                    {
                        cart.length == 0 ? (
                            <h1>Your cart is empty</h1>
                        ) : (
                            <h1>Subtotal({cart.length}): {currencyFormat(price)}</h1>
                        )
                    }
                </div>
            </div>
        </div >
    );
}

export default CarResult;
