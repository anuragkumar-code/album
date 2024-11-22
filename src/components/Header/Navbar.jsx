import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Digital Album</div>

      <Menu />

      <div className="relative">
        <FontAwesomeIcon
          icon={faUser}
          className="w-6 h-6 text-white rounded-full bg-gray-700 p-2 cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Profile
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
