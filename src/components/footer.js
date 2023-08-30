import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Trendy. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
};

export default Footer;
