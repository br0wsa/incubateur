import React from 'react';

const Cardthumb = ({ image, description }) => {

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg m-2 w-60">
      <img className="w-full h-48 object-cover" src={image} alt={description} />
      <div className="px-4 py-2">
        <h3 className="font-bold text-lg mb-2">{description}</h3>
      </div>
    </div>
  );
};

export default Cardthumb;