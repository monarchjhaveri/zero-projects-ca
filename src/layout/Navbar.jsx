import React from 'react';
import { Link } from 'react-router-dom'
import ZeroProjectsLogo from '../components/ZeroProjectsLogo.jsx';

const Navbar = () => (
  <div className="navbar">
    <ul className="tabs header-font no-select">
      <Link to="/"><li>Consulting</li></Link>
      <Link to="/technologies"><li>Technologies</li></Link>
      <Link to="/clients"><li>Clients</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/our-team"><li>Our team</li></Link>
    </ul>
  </div>
)

export default Navbar;