import React from 'react';
import '../styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <div className='footer'>
            <a className="footer--linkedin" href='https://www.linkedin.com/in/nicholasmel'>
                <LinkedInIcon sx={{ fontSize: "40px", color: 'white' }} />
            </a>
            <a className="footer--github" href='https://github.com/nicholasmel'>
                <GitHubIcon sx={{ fontSize: "34px", color: 'white' }} />
            </a>
            <a className="footer--email" href='mailto:nicholas.mel@asu.edu'>
                <EmailIcon sx={{ fontSize: "40px", color: 'white' }} />
            </a>
        </div>
    );
}

export default Footer;
