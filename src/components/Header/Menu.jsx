import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faPlus } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <ul className="flex gap-8 text-lg">
      <li className="flex items-center cursor-pointer px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white transition">
        <FontAwesomeIcon icon={faHome} className="mr-2" />
        <span>Home</span>
      </li>
      <li className="flex items-center cursor-pointer px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white transition">
        <FontAwesomeIcon icon={faImages} className="mr-2" />
        <span>Albums</span>
      </li>
      <li className="flex items-center cursor-pointer px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white transition">
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        <span>Create</span>
      </li>
    </ul>
  );
};

export default Menu;
