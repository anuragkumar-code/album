import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer';

const AlbumPage = () => {
  const { id } = useParams(); 
  const albums = [
    { id: 1, title: 'Vacation Memories', images: ['/images/sample1.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg'] },
    { id: 2, title: 'Family Reunion', images: ['/images/sample3.jpg', '/images/sample1.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg', '/images/sample2.jpg'] },
  ];

  const album = albums.find((a) => a.id === parseInt(id)); 
  const albumTitle = album?.title || 'Album Not Found';
  const albumImages = album?.images || [];

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
      <Footer />
    </>
  );
};

export default AlbumPage;
