import React from 'react';

const SkeletonAlbumCard = () => (
  <div className="max-w-sm rounded-lg shadow-lg bg-gray-200 animate-pulse">
    <div className="h-64 bg-gray-300"></div>
    <div className="p-4 space-y-2">
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  </div>
);

export default SkeletonAlbumCard;