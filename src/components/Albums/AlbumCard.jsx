import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

const AlbumCard = ({ album }) => {
  return (
    <div
      className="relative bg-white border-4 border-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 hover:animate-shake transition-all duration-300 cursor-pointer"
      onClick={() => console.log('Go to album details')}
    >

      <div className="relative h-64 w-full">
        <img
          src="https://via.placeholder.com/150"
          alt={album.title}
          className="object-cover w-full h-full"
        />
        
        <div className="absolute top-2 right-2 bg-black bg-opacity-0 text-white rounded-full p-2 hover:bg-opacity-60 transition-transform transform rotate-90">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>

      <div className="p-4 bg-gray-100">
        <h3 className="text-xl font-bold text-gray-800">{album.title}</h3>
        <div className="flex items-center text-gray-500 mt-2">
          <FontAwesomeIcon icon={faImages} className="mr-2 text-sm" />
          <span>{album.imagesCount} images</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
