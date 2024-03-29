import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-12 mx-auto">

{/* bootstrap */}

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/">Baba Dry Fruits</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
  
      </ul>
    </div>
  </div>
</nav> 
        

            </div>
        </div>
      </div>  
    </>
  )
}

export default Nav;