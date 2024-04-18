// LandingArea.jsx
import React, { useState } from 'react';
import './ButtonCSS.css';
import SearchComponent from './SearchComponent';
import RoomListingForm from './RoomListingForm';
import Character from '../images/Screenshot 2024-04-18 at 9.03.03 AM.png';

export default function Home() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{ fontSize: "70px" }}>
        Find your VIT Room-mate.
      </div>
      <div style={{width:'50%', backgroundColor:'#5199EB', height:"200px", borderRadius:'20px', display:'flex',flexDirection:"row", padding:"5px"}}>
        <p style={{flexBasis:'80%', fontSize:"30px", justifyContent:'center', alignContent:"center", color:"white"}}>Vit's Favourite roomate finder.</p>
        <img src={Character} alt="Character" style={{maxHeight:"200px", flexBasis:"20%"}} />

      </div>
      <div style={{ fontSize: "25px", marginTop:"20px"}}>
        <button
          className={selectedButton === 'list' ? 'selected' : ''}
          onClick={() => handleButtonClick('list')}
        >
          List your room
        </button>
        <button
          className={selectedButton === 'find' ? 'selected' : ''}
          onClick={() => handleButtonClick('find')}
        >
          Find your room
        </button>
        {selectedButton === 'find' && <div style={{ marginTop: "20px" }}>
          <SearchComponent />
        </div>}
        {selectedButton === 'list' && <div style={{ marginTop: "20px" }}>
          <RoomListingForm />
        </div>}
      </div>
    </div>
  );
}
