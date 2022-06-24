import React from 'react'
import { Link } from 'react-router-dom'
import './styles/NavBar.css'


export const NavBar = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'><h3>PELICULAS</h3></Link>
      </div>
      <div className='nav'>
        <ul className='nav-list'>
        <Link to='/populares'><li>Peliculas populares</li></Link>  
          {/* <li>Registrarse</li> */}
          {/* <li>Iniciar</li> */}
        </ul>
      </div>
    </div>
  )
}
