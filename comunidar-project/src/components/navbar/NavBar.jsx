import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logotype.png'

const NavBar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div>
      <header>
        <img className='logo' src={logo} alt="ComuniDAR" />
        <nav ref={navRef}>
          <Link to="/#">Home</Link>
          <Link to="/#">Nosotros</Link>
          <Link to="/#">Mentorías</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaTimes/>
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavBar}>
          <FaBars/>
        </button>
      </header>
    </div>
  )
}

export default NavBar