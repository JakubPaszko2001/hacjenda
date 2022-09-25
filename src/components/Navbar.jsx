import React from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import logo from '../public/images/logo2.png'
const Navbar = () => {
  const buttonHandle = () => {
    const element = document.getElementById('navbarMenu')
    element.classList.toggle("opened")
  }

  window.addEventListener("scroll", function() {
    var nav = document.getElementById('navbarContainer')
    nav.classList.toggle("background", window.scrollY > 0)
  })
  return (
  <div class='relative font-regular'>
    <div id='navbarContainer' className='navbarContainer'>
      <div class='hidden lg:w-1/3 lg:flex lg:justify-around lg:items-center text-xl'>
        <Link class='cursor-pointer' to="/">Strona główna</Link>
        <Link class='cursor-pointer' to="/about">O nas</Link>
        <Link class='cursor-pointer' to="/wedding">Wesela</Link>
        <Link class='cursor-pointer' to="/">Atrakcje</Link>
      </div>
      <div className='w-36 h-20 lg:flex lg:justify-center lg:items-center lg:w-1/3'>
        <div class='flex justify-center items-center w-full h-full object-cover lg:w-2/5'>
          <Link class='cursor-pointer' to="/"><img src={logo} alt='pgoto'/></Link>
        </div>
      </div>
      <div class='hidden lg:flex lg:justify-around lg:items-center lg:w-1/3 text-xl'>
        <Link class='cursor-pointer' to="/">Noclegi</Link>
        <Link class='cursor-pointer' to="/menu">Menu</Link>
        <Link class='cursor-pointer' to="/galery">Galeria</Link>
        <Link class='cursor-pointer' to="/contact">Kontakt</Link>
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
