import React from 'react';
import './Navbar.css'
import SearchBar from '../../page/searchBar/SearchBar';

export default function Navbar() {
  return <div className='navbar'> 
<nav>
  <a href="/" className='brand'>
    <h1>Yakhyobek's Kitchen</h1>
  </a>
  <SearchBar/>
  <a href="/create" >
    <h1>Create reciepe </h1>
  </a>
</nav>

  </div>;
}
