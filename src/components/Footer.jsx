import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4 text-center mt-6">
        <p>&copy; {currentYear} Digital Album. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
