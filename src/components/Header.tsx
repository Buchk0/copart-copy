import React from 'react'
import { Link } from 'react-router-dom'

import copartLogo from '../assets/images/copartlogo-40th-desktop.svg'
import Search from './Search'
import Localise from './Localise'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className="container">
        <Link to="/" className='logo--link'>
        <div className="header__logo">
          <img src={copartLogo} alt="Copart logo" />
        </div>
        </Link>
        <Search />
        <div className="header__registration">
          <Localise />
          <button className="registration--button reg">Register</button>
          <button className="registration--button sig">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Header