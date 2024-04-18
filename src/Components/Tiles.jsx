import React from 'react';

const Tiles = ({ images }) => {
  return (
    <div className="tiles-container">
      {images.map((image, index) => (
        <div key={index} className="tile">
          <img src={image} alt={`${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Tiles;
