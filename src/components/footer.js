import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-4' style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Trendy. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    borderTop: '1px solid #fff',
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
};

export default Footer;
