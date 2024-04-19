import React from 'react';

const Tiles = ({ tilesData }) => {

    const urlToVit = () => {
        const vitUrl = "https://vit.ac.in/campuslife/hostels";
        window.location.href = vitUrl;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop:"5rem"}}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '200px', justifyItems: 'center', width: "50%", alignContent: "center"}} onClick={urlToVit}>
                {tilesData.map(tile => (
                    <div key={tile.imageUrl} style={{ width: '200px', cursor:'pointer'}}>
                        <img src={tile.imageUrl} alt="Hostel" style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '5px' }} />
                        <h2>{tile.hostelName} Block</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tiles;
