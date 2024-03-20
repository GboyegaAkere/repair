import React from 'react';
import ph from '../assets/images/ph.jpg'
import phone1 from '../assets/images/phone1.jpg'
import phone2 from '../assets/images/phone2.jpg'
import laptop3 from '../assets/images/laptop3.jpg'

const Repairs = () => {
  // Array of image file names
  const images = [
    {
        "id": 1,
        "image":ph,
      },

      {
        "id": 2,
        "image":phone1,
      },

      {
        "id": 3,
        "image":phone2,
      },

      {
        "id": 4,
        "image":laptop3,
      },

      {
        "id": 5,
        "image":ph,
      },
    // Add more image file names as needed
  ];

  return (
    <div className='mt-[100px] md:mt-[100px]'>
      <div className='flex justify-center pb-10'>
       <p className='text-2xl font-semibold'>Repairs</p>
      </div>
      <div className="grid grid-cols-3 gap-4  md:px-[50px] px-[20px]">
      {/* Display images */}
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img src={image.image} alt='' className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <p className="text-white">Image {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default Repairs;
