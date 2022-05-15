import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='nav-container'>
      <div className='nav-div'><h4 className='nav-h4'>MIMI</h4></div>
      <div className='nav-div1'>
        <ul className='nav-ul'>
          <li className='nav-li'><Link to={'/'} className='nav-li'>Home</Link></li>
          <li className='nav-li'><Link to={'/about'} className='nav-li'>About Us</Link></li>
          <li className='nav-li'><Link to={'/product'} className='nav-li'>Product</Link></li>
        </ul>
        
      </div>
    </div>
  )
}

export default navbar