import React from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const buttonHandle = () => {
    const element = document.getElementById('navbarMenu')
    element.classList.toggle("opened")
  }

  return (
  <div class='relative'>
    <div className='navbarContainer lg:m-auto'>
      <div class='hidden lg:w-1/3 lg:flex lg:justify-around lg:items-center text-xl'>
        <Link to="/">Strona główna</Link>
        <Link to="/info">O nas</Link>
        <Link to="/">Oferta</Link>
        <Link to="/">Atrakcje</Link>
      </div>
      <div className='lg:flex lg:justify-center lg:items-center lg:w-1/3'>
        <h1 className='h1'>HACJENDA</h1>
      </div>
      <div class='hidden lg:flex lg:justify-around lg:items-center lg:w-1/3 text-xl'>
        <h1>Noclegi</h1>
        <h1>Menu</h1>
        <h1>Galeria</h1>
        <h1>Kontakt</h1>
      </div>
      <div class='text-4xl lg:hidden'>
        <GiHamburgerMenu onClick={buttonHandle} />
      </div>
    </div>
    <div className='menuOpen' id='navbarMenu'>
        <h1 class='p-4'>O nas</h1>
        <h1 class='p-4'>Oferta</h1>
        <h1 class='p-4'>cos</h1>
        <h1 class='p-4'>cos</h1>
        <h1 class='p-4'>cos</h1>
    </div>
  </div>
  )
}

export default Navbar
