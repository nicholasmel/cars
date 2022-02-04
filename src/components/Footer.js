import React from 'react';
import '../styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <div className='footer'>
            <LinkedInIcon className="footer--icon-linkedin" sx={{ fontSize: "50px", color: 'white' }} />
            <GitHubIcon className="footer--icon-github" sx={{ fontSize: "44px", color: 'white' }} />
            <EmailIcon className="footer--icon-email" sx={{ fontSize: "50px", color: 'white' }} />
        </div>
    );
}

export default Footer;
