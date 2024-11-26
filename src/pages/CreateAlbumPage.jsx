import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer';

const CreateAlbumPage = () => {
  const [albumDetails, setAlbumDetails] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0], 
    description: '',
    coverPhoto: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbumDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Album Details:', albumDetails);
    alert('Album created successfully!');
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Album</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Album Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={albumDetails.name}
                onChange={handleChange}
                required
                placeholder="Enter album name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={albumDetails.date}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Album Description
              </label>
              <textarea
                id="description"
                name="description"
                value={albumDetails.description}
                onChange={handleChange}
                placeholder="Add a short description for the album"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="coverPhoto"
                className="block text-sm font-medium text-gray-700"
              >
                Cover Photo URL
              </label>
              <input
                type="url"
                id="coverPhoto"
                name="coverPhoto"
                value={albumDetails.coverPhoto}
                onChange={handleChange}
                placeholder="Add a URL for the album cover photo"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={albumDetails.tags}
                onChange={handleChange}
                placeholder="Add tags (comma-separated)"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all"
              >
                Create Album
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateAlbumPage;