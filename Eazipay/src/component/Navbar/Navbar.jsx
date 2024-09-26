import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => { 
  return (
    <nav className='nav'>
      <div className="container">
      <NavLink to="/" className='logo'>
      <img src={logo} alt="" />
      </NavLink>
      <ul>
        <li>
        <NavLink
     to="/individual"
     className={({isActive})=> (isActive ? 'active' : 'inactive') }
     >Individual
     </NavLink>
        </li>
        <li> <NavLink
     to="/business"
     className={({isActive})=> (isActive ? 'active' : 'inactive') }
     >Business
     </NavLink></li>
     <li>
     <NavLink
     to="/pricing"
     className={({isActive})=> (isActive ? 'active' : 'inactive') }
     >Pricing
     </NavLink>
     </li>
     <li>
     <NavLink
     to="/set your payroll"
     className={({isActive})=> (isActive ? 'active' : 'inactive') }
     >Set Your Payroll
     </NavLink>
     </li>
      </ul>
      <div className='Btn'>
        <button className='btn1'>login</button>
        <button className='btn'>Register</button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar