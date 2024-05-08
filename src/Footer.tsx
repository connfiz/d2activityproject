import React from 'react';
import './index.css'; // Make sure to import the CSS for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img src="src\assets\images\logo.png" alt="dungeon logo" className="logo" />
                <div className="footer-info">
                    
                    <p>Destiny activity Report - Version 1.00</p>
                    <p>All data and images are property of Bungie.</p>
                    <p>made by conn_fiz#5569</p>
                </div>
                <div className="footer-contact">
                    <p>Reach out:</p>
                    <a href="x20394073@student.ncirl.ie">x20394073@student.ncirl.ie</a>
                    
                    
                </div>
              
            </div>
        </footer>
    );
}

export default Footer;
