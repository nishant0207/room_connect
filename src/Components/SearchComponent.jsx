import React, { useState } from 'react';

const SearchComponent = ({ database }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = database.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div style={{fontSize:"25px"}}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        style={{ padding: '8px', marginRight: '8px', border: '1px solid #ccc', borderRadius: '20px', boxSizing: 'border-box', width: '500px' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Search
      </button>
      <div className="search-results">
        {searchResults.map((result, index) => (
          <div key={index} className="search-result-item" style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{result}</div>
        ))}
        {searchResults.length === 0 && <div className="no-results-message" style={{ padding: '8px', color: '#777' }}>No results found</div>}
      </div>
    </div>
  );
};

export default SearchComponent;
