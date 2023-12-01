import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm ">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4 " href="#">Wonderkind</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto mb-2 ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
</ul>
     <div className='buttons'>
      <NavLink className='btn btn-outline-dark' to="/login">Login
        <i className='fa fa-sign-in me-1'></i></NavLink>
      
      <NavLink className='btn btn-outline-dark ms-2' to="/register" >Register
        <i className='fa fa-registered me-1'></i>
      </NavLink>
            <NavLink className='btn btn-outline-dark ms-2' to="/cart">Cart(0)
        <i className='fa fa-shopping-cart me-1'></i>
      </NavLink>
      

     </div>         
    </div>
  </div>
</nav>
    </div>
        
  )
}

export default Navbar