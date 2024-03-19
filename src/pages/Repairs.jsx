import React from 'react';
import ph from '../assets/images/ph.jpg'


const Repairs = () => {
  // Array of image file names
  const images = [
    {
        "id": 1,
        "image":ph,
      },

      {
        "id": 2,
        "image":ph,
      },

      {
        "id": 3,
        "image":ph,
      },

      {
        "id": 4,
        "image":ph,
      },

      {
        "id": 5,
        "image":ph,
      },
    // Add more image file names as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-[100px] md:mt-[200px] md:px-[50px] px-[20px]">
      {/* Display images */}
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img src={image.image} alt='' className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <p className="text-white">Image {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repairs;
