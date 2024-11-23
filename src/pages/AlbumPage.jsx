import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer';

const AlbumPage = () => {
  const { id } = useParams();
  const albums = [
    {
      id: 1,
      title: 'Vacation Memories',
      images: ['/images/sample1.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg'],
    },
    {
      id: 2,
      title: 'Family Reunion',
      images: ['/images/sample3.jpg', '/images/sample1.jpg', '/images/sample2.jpg', '/images/sample3.jpg'],
    },
  ];

  const album = albums.find((a) => a.id === parseInt(id));
  const albumTitle = album?.title || 'Album Not Found';
  const albumImages = album?.images || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? albumImages.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === albumImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar />
      <div
        className="pt-20 bg-gray-100 min-h-screen overflow-auto"
        style={{ backgroundColor: '#f5f7fa' }}
      >
        <div className="px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{albumTitle}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albumImages.map((image, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`Album image ${index + 1}`}
                  className="object-cover w-full h-56 transition-transform transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold text-lg">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-6">
            <img
              src={albumImages[currentImageIndex]}
              alt="Current"
              className="object-contain w-full h-[80vh] rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold p-2 rounded-full hover:bg-black hover:bg-opacity-50 transition"
            >
              ✕
            </button>
            <button
              onClick={showPrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-black hover:bg-opacity-50 transition"
            >
              ‹
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-black hover:bg-opacity-50 transition"
            >
              ›
            </button>
          </div>
        </div>
      )}


      <Footer />
    </>
  );
};

export default AlbumPage;
