import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faImages } from '@fortawesome/free-solid-svg-icons';

const AlbumCard = ({ album }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/album/${album.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="max-w-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <div className="border-4 border-white rounded-lg overflow-hidden">
          <img
            src="/images/sample1.jpg"
            alt={album.title}
            className="object-cover w-full h-64 transition-transform transform hover:scale-105"
          />
        </div>
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-opacity">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{album.title}</h3>
          <div className="flex items-center text-gray-500 text-sm">
            <FontAwesomeIcon icon={faImages} className="mr-2" />
            <span>{album.imagesCount} images</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
