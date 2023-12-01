import React from 'react'
import boy from "../assets/boy.jpg"

import Products from './Products'

const Background = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
  <img src={boy} className="card-img" alt="boy" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
  <div className='container'>
    <h5 className="card-title display-3 fw-bold mb-5 text-secondary">WINTER SEASON COMING</h5>
    <p className="card-text lead fs-2">CHECK OUT NEW TRENDS</p>
    
  </div>
</div>
    </div>
    <div>
    </div>
      <Products/>
    </div>
    
    
  )
}

export default Background