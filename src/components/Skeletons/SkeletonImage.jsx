import React from 'react';

const SkeletonImage = () => (
  <div className="relative rounded-lg overflow-hidden shadow-lg animate-pulse bg-gray-300 h-56">
    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
      Loading...
    </div>
  </div>
);

export default SkeletonImage;
