import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase';
import TaxiListingForm from './TaxiListingForm';

export default function TaxiShare() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(firestore, "rooms/lrtQnoUWmxkGv2gKeup2/taxiInfo");
        const q = query(collectionRef, where("from", "==", searchQuery));
        const snapshot = await getDocs(q);
        const searchData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const formattedDate = new Date(data.date.seconds * 1000).toLocaleDateString();
          searchData.push({ 
            from: data.from, 
            to: data.to, 
            date: formattedDate, 
            passengers: data.passengers 
          });
        });
        setSearchResults(searchData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      getData();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleOptionSelect('list')}
          style={{ marginRight: '10px', border: selectedOption !== 'list' ? '1px solid black' : 'none', backgroundColor: selectedOption === 'list' ? '#007bff' : 'transparent', color: selectedOption === 'list' ? 'white' : 'black', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
        >
          List Taxi
        </button>
        <button
          onClick={() => handleOptionSelect('search')}
          style={{ border: selectedOption !== 'search' ? '1px solid black' : 'none', backgroundColor: selectedOption === 'search' ? '#007bff' : 'transparent', color: selectedOption === 'search' ? 'white' : 'black', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Search Taxi
        </button>
      </div>
      {selectedOption === 'list' && (
        <div style={{ marginTop: '20px' }}>
          <TaxiListingForm />
        </div>
      )}
      {selectedOption === 'search' && (
        <div style={{ marginTop: '20px', fontSize: '25px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            style={{ padding: '8px', marginRight: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', width: '500px' }}
          />
          <button
            onClick={() => setSearchQuery(searchQuery)}
            style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Search
          </button>
          <div className="search-results" style={{ marginTop: "20px" }}>
            {loading ? (
              <div className="loading-message">Loading...</div>
            ) : searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div key={index} className="search-result-item" style={{ padding: '8px', borderBottom: '1px solid #ccc', border: '2px solid black', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: "flex-start" }}>
                  <div>From: {result.from}</div>
                  <div>To: {result.to}</div>
                  <div>Date: {result.date}</div>
                  <div>Passengers: {result.passengers}</div>
                </div>
              ))
            ) : (
              <div className="no-results-message" style={{ padding: '8px', color: '#777' }}>No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
