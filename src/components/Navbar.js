import React from 'react'
import  { NavLink } from 'react-router-dom'

const Navbar = () => { 
    return (
      <div className="navbar w-100 black d-flex justify-content-end">
       <ul className="nav">

          <li className="nav-item">
            <NavLink className="nav-link text-orange" to="/aclass-restaurant">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-orange" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-orange" to="/menu">Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-orange" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-orange" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-orange" to="/order">Make Order</NavLink>
          </li>
          
        </ul> 
      </div>
    )
  
}


export default Navbar