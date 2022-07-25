import React from 'react'


const SearchBox = ({onSearchChange}) => {
  
return (

    <div className='search-box' >
        <input id='search-box' type="text" onChange={(e) => onSearchChange(e.target.value)} />
        <i  className="bi bi-search"></i>
    </div>
  )
}

export default SearchBox