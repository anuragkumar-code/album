import React from 'react';

const SearchAndCreate = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-transparent p-4">
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 active:scale-95 transition"
        onClick={() => console.log('Navigate to Create Album')}
      >
        + Album
      </button>

      <input
        type="text"
        placeholder="Search albums..."
        className="w-full sm:w-1/2 mb-4 sm:mb-0 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
        onChange={(e) => console.log('Search query:', e.target.value)}
      />

    </div>
  );
};

export default SearchAndCreate;
