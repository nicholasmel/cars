import React, { useState } from 'react';
import '../styles/Header.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { sliderdata } from '../sliderdata';
import { hover } from '@testing-library/user-event/dist/hover';


function Header() {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === sliderdata.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? sliderdata.length - 1 : slide - 1);
    }

    if (!Array.isArray(sliderdata) || sliderdata.length <= 0) {
        return null;
    }

    return (
        <div className="header">
            {/* <img src="https://toyota.scene7.com/is/image/toyota/SUP_MY22_0012_V001_welcome?fmt=jpg&fit=crop&qlt=90&hei=660" alt="" /> */}
            <div className='arrow'>
                <div className='arrow-left' onClick={prevSlide}>
                    <ArrowCircleLeftIcon sx={{ fontSize: '70px', color: 'white' }} />
                </div>
                <div className='arrow-right' onClick={nextSlide}>
                    <ArrowCircleRightIcon sx={{ fontSize: '70px', color: 'white' }} />
                </div>
            </div>
            {sliderdata.map((item, id) => {
                return (
                    <div key={id} className='slider'>
                        {id === slide && (
                            <img src={item.img} alt="" />
                        )}
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Header;
