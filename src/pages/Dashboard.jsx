import React from 'react';
import Navbar from '../components/Header/Navbar';
import SearchAndCreate from '../components/Dashboard/SearchAndCreate';
import AlbumCard from '../components/Albums/AlbumCard';
import Footer from '../components/Footer'; 

const Dashboard = () => {
  const albums = [
    { id: 1, title: 'Vacation Memories', imagesCount: 12 },
    { id: 2, title: 'Family Reunion', imagesCount: 8 },
    { id: 3, title: 'Wedding Day', imagesCount: 25 },
    { id: 4, title: 'Graduation', imagesCount: 10 },
    { id: 5, title: 'Ooty Trip', imagesCount: 10 },
    { id: 6, title: 'Shillong Trip', imagesCount: 10 },
    { id: 7, title: 'Birthday', imagesCount: 10 },
    { id: 8, title: 'Engagement Day', imagesCount: 10 },
    { id: 9, title: 'Jammu Trip', imagesCount: 10 },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen pt-10 p-6 overflow-auto">
        <SearchAndCreate />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
