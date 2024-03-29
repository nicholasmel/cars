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
    const [price, setPrice] = useState(63379);
    const [credit, setCredit] = useState(4.19);
    const [term, setTerm] = useState(72);
    const [cash, setCash] = useState(2000);
    const [trade, setTrade] = useState(0);

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleCreditChange = (event) => {
        setCredit(event.target.value);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleCashChange = (event) => {
        setCash(event.target.value);
    };

    const handleTradeChange = (event) => {
        setTrade(event.target.value);
    };

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const calculateFinance = () => {
        let msrp = Number(price);
        let off = Number(cash) + Number(trade);
        let loan = msrp - off;
        let interest = loan * (credit * .01);
        let total = loan + interest;
        let final = formatter.format(total / term);
        return (Number.isNaN(final) ? 0 : final);
    }

    const calculateLoanAmount = () => {
        let msrp = Number(price);
        let off = Number(cash) + Number(trade);
        let loan = msrp - off;

        return formatter.format(loan);
    }

    const calculateInterest = () => {
        let msrp = Number(price);
        let off = Number(cash) + Number(trade);
        let loan = msrp - off;
        let interest = loan * (credit * .01);

        return formatter.format(interest);
    }

    const calculateTotalLoan = () => {
        let msrp = Number(price);
        let off = Number(cash) + Number(trade);
        let loan = msrp - off;
        let interest = loan * (credit * .01);
        let total = loan + interest;

        return formatter.format(total);
    }

    return (
        <div className='finance'>
            <div className="finance--title">
                <h1>PAYMENT ESTIMATOR</h1>
                <p>Use auto loan calculator to see an estimate of your monthly car payment.</p>
            </div>
            <div className="finance--content" >
                <img src={pay} alt=""></img>
                <div className="finance--calculator">
                    <h1>Auto Loan Calculator</h1>
                    <div className="finance--input">
                        <FormControl sx={{ m: 1, width: '25vw' }}>
                            <OutlinedInput onChange={handlePriceChange} sx={{ backgroundColor: 'white', height: '40px' }} placeholder="$63,379" />
                            <FormHelperText>Vehicle Price</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '12vw' }}>
                            <InputLabel id="demo-simple-select-helper-label">Credit</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={credit}
                                label="Credit"
                                onChange={handleCreditChange}
                                sx={{ backgroundColor: 'white', textAlign: 'left', height: '40px' }}
                            >
                                <MenuItem value={4.19}>Excellent 720+</MenuItem>
                                <MenuItem value={5.2}>Great 719-690</MenuItem>
                                <MenuItem value={7.69}>Very Good 689-670</MenuItem>
                                <MenuItem value={7.95}>Good 669-650</MenuItem>
                                <MenuItem value={8.85}>Fair 649-630</MenuItem>
                                <MenuItem value={11.5}>Poor 629-610</MenuItem>
                                <MenuItem value={14.95}>Very Poor 609-580</MenuItem>
                                <MenuItem value={19.5}>Extremely Poor 579-520</MenuItem>
                            </Select>
                            <FormHelperText>Estimated Credit Score</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '12vw' }}>
                            <OutlinedInput onChange={handleCashChange} sx={{ backgroundColor: 'white', height: '40px' }} placeholder="$2000" />
                            <FormHelperText>Cash Down</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '12vw' }}>
                            <InputLabel id="demo-simple-select-helper-label">Term</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={term}
                                label="Term"
                                onChange={handleTermChange}
                                sx={{ backgroundColor: 'white', textAlign: 'left', height: '40px' }}
                            >
                                <MenuItem value={24}>24 Months</MenuItem>
                                <MenuItem value={36}>36 Months</MenuItem>
                                <MenuItem value={48}>48 Months</MenuItem>
                                <MenuItem value={60}>60 Months</MenuItem>
                                <MenuItem value={72}>72 Months</MenuItem>
                            </Select>
                            <FormHelperText>Term Length</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '12vw' }}>
                            <OutlinedInput sx={{ backgroundColor: 'white', height: '40px' }} value={credit + '%'} />
                            <FormHelperText>Estimated APR</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '12vw' }}>
                            <OutlinedInput onChange={handleTradeChange} sx={{ backgroundColor: 'white', height: '40px' }} placeholder="$0" />
                            <FormHelperText>Estimated Trade-In Value</FormHelperText>
                        </FormControl>
                    </div>
                    <h2>Your loan estimate</h2>
                    <div className='loan--estimate'>
                        <div className='loan--info'>
                            <h4>Monthly payment</h4>
                            <h3>{calculateFinance()}</h3>
                        </div>
                        <div className='loan--info'>
                            <h4>Loan amount</h4>
                            <p>{calculateLoanAmount()}</p>
                            <h4>Total interest cost</h4>
                            <p>{calculateInterest()}</p>
                            <h4>Total loan payments</h4>
                            <p>{calculateTotalLoan()}</p>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
}

export default Finance;
