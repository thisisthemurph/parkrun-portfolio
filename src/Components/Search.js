import React from 'react'
import './Search.scss'

function Search({searchChange, searchButtonClick}) {
  return (
    <div className='Search'>
        <div className='button-wrapper'>
          <input type="text" inputMode="numeric" onChange={searchChange} />
          <button className='button' type="button" onClick={searchButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
    </div>
  );
}

export default Search;
