import React, { useState } from 'react';

const FilterList = () => {
  const [selectedFilter, setSelectedFilter] = useState('All (10)');

  const filters = ['All (10)', 'Images (7)', 'Videos (2)'];

  return (
    <div className="flex items-center space-x-6">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`text-sm font-semibold relative transition ${
            selectedFilter === filter
              ? 'text-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          }`}
          onClick={() => {
            setSelectedFilter(filter);
            console.log(`Filter: ${filter}`);
          }}
        >
          {filter}
          <span
            className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-blue-600 transition-transform transform origin-left ${
              selectedFilter === filter ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default FilterList;

