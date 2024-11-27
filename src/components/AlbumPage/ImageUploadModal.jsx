import React, { useState } from 'react';

const ImageUploadModal = ({ isOpen, onClose, onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...filePreviews]);
  };

  const removeSelectedImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    onUpload(selectedImages);
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full mx-6 bg-white p-6 rounded-lg shadow-lg h-[80vh]"> 
        <h2 className="text-2xl font-bold mb-6">Upload Images</h2>

        <div className="mb-6">
          {selectedImages.length > 0 && (
            <div className="overflow-y-auto max-h-[50vh] bg-blue-100 border-2 border-dotted rounded-lg p-4"> 
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Selected ${index}`}
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <button
                      onClick={() => removeSelectedImage(index)}
                      className="absolute top-1 right-1 text-white bg-gray-600 p-1 rounded-full hover:bg-gray-700"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center space-x-4">
          <div className="w-full">
            <label
              htmlFor="file-input"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer shadow hover:bg-blue-600 active:scale-95 transition"
            >
              Browse Files
            </label>
            <input
              id="file-input"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
