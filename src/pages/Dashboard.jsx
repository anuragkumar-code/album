import React, { useState, useEffect } from 'react';
import Navbar from '../components/Header/Navbar';
import SearchAndCreate from '../components/Dashboard/SearchAndCreate';
import FilterList from '../components/Dashboard/FilterList';
import AlbumCard from '../components/Albums/AlbumCard';
import SkeletonAlbumCard from '../components/Skeletons/SkeletonAlbumCard'; 
import Footer from '../components/Footer';


const Dashboard = () => {
  const allAlbums = [
    { id: 1, title: 'Vacation Memories', imagesCount: 12 },
    { id: 2, title: 'Family Reunion', imagesCount: 8 },
    { id: 3, title: 'Wedding Day', imagesCount: 25 },
    { id: 4, title: 'Graduation', imagesCount: 10 },
    { id: 5, title: 'Ooty Trip', imagesCount: 10 },
    { id: 6, title: 'Shillong Trip', imagesCount: 10 },
    { id: 7, title: 'Birthday', imagesCount: 10 },
    { id: 8, title: 'Engagement Day', imagesCount: 10 },
    { id: 9, title: 'Jammu Trip', imagesCount: 10 },
    { id: 10, title: 'Paris Vacation', imagesCount: 15 },
    { id: 11, title: 'Christmas Party', imagesCount: 20 },
    { id: 12, title: 'New Year Eve', imagesCount: 18 },
  ];

  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;

  const loadAlbums = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const newAlbums = allAlbums.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      );
      setAlbums((prevAlbums) => [...prevAlbums, ...newAlbums]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadAlbums();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, page]);

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="pt-20 bg-gray-100 min-h-screen overflow-auto"
        style={{ backgroundColor: '#f5f7fa' }}
      >
        <div className="px-6 space-y-6">
          <SearchAndCreate />
          <FilterList />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}

            {isLoading &&
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <SkeletonAlbumCard key={index} />
              ))}
          </div>

          {!isLoading && albums.length >= allAlbums.length && (
            <p className="text-center py-4 text-gray-600">No more albums to load</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
