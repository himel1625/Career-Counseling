import React from 'react';
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span
        className="loading loading-spinner text-accent 
          w-8 h-8 sm:w-10 sm:h-10 lg:w-24 lg:h-24 
          text-sm sm:text-base lg:text-lg"
      ></span>
    </div>
  );
};

export default Loader;
