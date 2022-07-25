import React from 'react'


const SearchBox = ({onSearchChange}) => {
  
return (

    <div className='search-box' id='search-box'>
        <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
        <i  className="bi bi-search"></i>
    </div>
  )
}

export default SearchBox