import React from 'react';
import "../styles/Card.css";

function Card() {
    return (
        <div className='card'>
            <img src='https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2022/gr-supra/a91cfedition/2378/a99/2.png?fm=png&bg=white&w=768&h=328&q=90' alt='' />
            <div className='card--info'>
                <h1>2022 Toyota GR Supra</h1>
                <div className='card--info-primary'>
                    <p>3.0 Premium</p>
                    <p>4,3923 miles</p>
                </div>
            </div>
            <div className='card--price'>
                <h1>$55,990</h1>
                <h2>Est. $890/mo</h2>
            </div>
            <div className='card--button'>
                <h1>Button</h1>
            </div>
        </div >
    );
}

export default Card;
