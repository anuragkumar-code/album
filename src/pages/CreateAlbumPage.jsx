import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createAlbum } from '../services/albumService';

const CreateAlbumPage = () => {
  const navigate = useNavigate();

  const [albumDetails, setAlbumDetails] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0], 
    description: '',
    coverPhoto: '',
    tags: '',
    category: '',
    privacy: 'Private',
    location: '',
    commentsEnabled: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setAlbumDetails((prevDetails) => ({
        ...prevDetails,
        [name]: files[0], 
      }));
    } else {
      setAlbumDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };
  

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAlbumDetails((prevDetails) => ({
      ...prevDetails,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!albumDetails.name || !albumDetails.description || !albumDetails.coverPhoto) {
      toast.error('Please fill all required fields.');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in albumDetails) {
        formData.append(key, albumDetails[key]);
      }

      const response = await createAlbum(formData);
      toast.success('Album created successfully! 🎉');

      setTimeout(() => {
        navigate('/albums'); 
      }, 1500);
    } catch (error) {
      console.error('Error creating album:', error);
      toast.error('Failed to create album. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 pt-20 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Album</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Album Name <span className="text-red-500">*</span> 
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
                  Date <span className="text-red-500">*</span> 
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
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Album Description <span className="text-red-500">*</span> 
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label htmlFor="coverPhoto" className="block text-sm font-medium text-gray-700">
                  Cover Photo <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="coverPhoto"
                    name="coverPhoto"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center bg-white hover:bg-gray-100 transition-all"
                    onClick={() => document.getElementById('coverPhoto').click()} 
                  >
                    <span className="text-sm">Choose a image</span>
                    <span className="text-xl text-gray-400 ml-2">📂</span> 
                  </button>
                </div>
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

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Album Category 
                </label>
                <select
                  id="category"
                  name="category"
                  value={albumDetails.category}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Vacation">Vacation</option>
                  <option value="Family">Family</option>
                  <option value="Events">Events</option>
                  <option value="Work">Work</option>
                  <option value="Nature">Nature</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="privacy" className="block text-sm font-medium text-gray-700">
                  Privacy Settings <span className="text-red-500">*</span> 
                </label>
                <select
                  id="privacy"
                  name="privacy"
                  value={albumDetails.privacy}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                  <option value="Friends Only">Friends Only</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={albumDetails.location}
                  onChange={handleChange}
                  placeholder="Enter location (e.g., Paris, France)"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="commentsEnabled" className="block text-sm font-medium text-gray-700">
                Allow Comments <span className="text-red-500">*</span> 
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="commentsEnabled"
                  name="commentsEnabled"
                  checked={albumDetails.commentsEnabled}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="commentsEnabled" className="ml-2 text-sm text-gray-600">
                  Enable comments on this album
                </label>
              </div>
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
