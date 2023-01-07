
import React, { useState } from 'react'

const Navbar = (props) => {
  const [search, setSearch] = useState('');
  
  const displaySearch = () =>{
    console.log(search)
  }
  const handleOnChange = (event) =>{
    setSearch(event.target.value)
    console.log(event.target.value)
  }
  return (
    <nav className={`navbar navbar-light`} style={{ borderBottom: "2px solid #dddddd",backgroundColor:props.mode==='dark'?'#2c2c2c':'white'}}>
      <div className="container-fluid">
        <a className="navbar-brand" style={{color:props.mode==='dark'?'white':'black'}} href="#">
          <img src="favicon.ico" width="60" height="48" class="d-inline-block align-text-top" />  News App</a>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="" value={search} onChange={handleOnChange} aria-label="Search" />
          <button className="btn btn-outline-secondary " type="submit" onClick={displaySearch}>Search</button>
        </form>

      </div>
    </nav>
  );
}

export default Navbar
