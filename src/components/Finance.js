import React, { useState } from 'react';
import '../styles/Finance.css';
import pay from '../images/suprapay.png';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';


function Finance() {
    const [credit, setCredit] = React.useState(72);
    const [term, setTerm] = useState(50);
    const [cash, setCash] = useState(2000);
    const [apr, setApr] = useState(4.19);
    const [trade, setTrade] = useState(0);


    const handleCreditChange = (event) => {
        setCredit(event.target.value);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleCashChange = (event) => {
        setCash(event.target.value);
    };

    const handleAprChange = (event) => {
        setApr(event.target.value);
    };

    const handleTradeChange = (event) => {
        setTrade(event.target.value);
    };

    const calculate = () => {
        let sum = 0;
        let c = Number(cash);
        let a = Number(apr);
        let t = Number(trade);
        const vehicle = 60000;
        let total = (vehicle - t) + (vehicle * a);
        sum = total / term;
        return `Finance for $${sum}/month`;
    }

    return (
        <div className='finance'>
            <div className="featured--title">
                <h1>PAYMENT ESTIMATOR</h1>
            </div>
            <div className="finance--limited" >
                <img src={pay} alt=""></img>
                <div className="finance--calculator">
                    <h1>Finance</h1>
                    <FormControl sx={{ m: 1, width: 160 }}>

                        <InputLabel id="demo-simple-select-helper-label">Credit</InputLabel>

                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={credit}
                            label="Credit"
                            onChange={handleCreditChange}
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value={10}>Excellent 720+</MenuItem>
                            <MenuItem value={20}>Great 719-690</MenuItem>
                            <MenuItem value={30}>Very Good 689-670</MenuItem>
                            <MenuItem value={40}>Good 669-650</MenuItem>
                            <MenuItem value={50}>Fair 649-630</MenuItem>
                            <MenuItem value={60}>Poor 629-610</MenuItem>
                            <MenuItem value={70}>Very Poor 609-580</MenuItem>
                            <MenuItem value={80}>Extremely Poor 579-520</MenuItem>
                        </Select>
                        <FormHelperText sx={{ color: 'white' }}>Estimated Credit Score</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 160 }}>
                        <OutlinedInput onChange={handleCashChange} sx={{ backgroundColor: 'white' }} placeholder="$2000" />
                        <FormHelperText sx={{ color: 'white' }}>Cash Down</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 160 }}>
                        <InputLabel id="demo-simple-select-helper-label">Term</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={term}
                            label="Age"
                            onChange={handleTermChange}
                            sx={{ backgroundColor: 'white' }}
                        >
                            <MenuItem value={24}>24 Months</MenuItem>
                            <MenuItem value={36}>36 Months</MenuItem>
                            <MenuItem value={48}>48 Months</MenuItem>
                            <MenuItem value={60}>60 Months</MenuItem>
                            <MenuItem value={72}>72 Months</MenuItem>
                        </Select>
                        <FormHelperText sx={{ color: 'white' }}>Term Length</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 160 }}>
                        <OutlinedInput onChange={handleAprChange} sx={{ backgroundColor: 'white' }} placeholder="4.19%" />
                        <FormHelperText sx={{ color: 'white' }}>Estimated APR</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 160 }}>
                        <OutlinedInput onChange={handleTradeChange} sx={{ backgroundColor: 'white' }} placeholder="$0" />
                        <FormHelperText sx={{ color: 'white' }}>Estimated Trade-In Value</FormHelperText>
                    </FormControl>
                    <h2>{calculate()}</h2>
                </div>
            </div >

        </div >
    );
}

export default Finance;
