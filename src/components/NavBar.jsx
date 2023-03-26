import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <div className='navbar'>
            <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
            </div>
        </div>
      
    </nav>
  )
}

export default NavBar
