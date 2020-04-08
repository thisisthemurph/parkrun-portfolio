import React from 'react'
import './Search.scss'

function Search({searchChange, searchButtonClick}) {
  return (
    <div className='Search'>
        <input type="text" inputMode="numeric" onChange={searchChange} />
        <div className='button-wrapper'>
          <input class='button' type="button" value="Search" onClick={searchButtonClick} /> 
        </div>
    </div>
  );
}

export default Search;
