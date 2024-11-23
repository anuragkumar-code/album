import React from 'react';

const SearchAndCreate = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center rounded-lg mt-6 space-y-4 sm:space-y-0">
      <div className="w-full sm:w-1/5 relative">
        <input
          type="text"
          placeholder="Search albums..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          onChange={(e) => console.log('Search query:', e.target.value)}
        />
        <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 active:scale-95 transition font-semibold text-sm"
        onClick={() => console.log('Navigate to Create Album')}
      >
        + Album
      </button>
    </div>
  );
};

export default SearchAndCreate;
