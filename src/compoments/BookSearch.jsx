import React from 'react'
import  "../api"
const BookSearch = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  };

export default BookSearch