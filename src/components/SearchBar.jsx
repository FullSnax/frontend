import React from 'react'

export default function SearchBar() {
  return (
    <>
      <div className='search'>
      <h5 className='search-title'>
        Find your favorite dish!
        </h5>
      <div className="search-bar">
      </div>
  <a className="active" href="#home"></a>
  <a href="#about"></a>
  <a href="#contact"></a>
  <input type="search" placeholder="Search.." />
      </div>
      </>
  )
}
