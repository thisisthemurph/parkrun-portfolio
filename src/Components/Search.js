import React from 'react';
// import './Search.css';

function Search({searchChange, searchButtonClick}) {
  return (
    <div>
        <input type="text" inputMode="numeric" onChange={searchChange} />
        <input type="button" value="Search" onClick={searchButtonClick} />
    </div>
  );
}

export default Search;
