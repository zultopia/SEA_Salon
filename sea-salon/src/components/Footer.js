import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h2 className="footer-title">SEA Salon</h2>
                    <p className="footer-subtitle"><em>Beauty and Elegance Redefined</em></p>
                </div>
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Thomas: 08123456789</p>
                    <p>Sekar: 08164829372</p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024 SEA Salon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;