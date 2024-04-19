import React, { useState, useEffect } from 'react';
import hostelData from './images.json'; // Import the JSON file
import Tiles from './Tiles';

const HostelInfo = () => {
  const [tilesData, setTilesData] = useState([]);

  useEffect(() => {
    // Modify the hostelData to include both image URL and hostel name
    const modifiedData = hostelData.map(hostel => ({
      imageUrl: hostel.url,
      hostelName: hostel.hostelName,
    }));
    setTilesData(modifiedData);
  }, []);

  return (
    <div>
      <h1>Hostel Info</h1>
      <Tiles tilesData={tilesData} />
    </div>
  );
};

export default HostelInfo;
