import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from "react-router-dom";
import '../../../src/index.css';

const Navbar = () => {
  const { LogOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for dropdowns

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggle between open and close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when needed
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // toggle dropdown manually
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close dropdown manually when clicking link
  };

  const Navlink = (
    <>
      {/* Home Link */}
      <li>
        <NavLink className="mr-1 md:mr-4 my-3 md:my-0 font-bold text-white" to='/' onClick={closeMenu}>Home</NavLink>
      </li>
      {/* Research Dropdown */}
      <li>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="mr-1 md:mr-4 my-3 md:my-0 font-bold text-white"
          >
            Research
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-slate-700 p-2 space-y-2 rounded-md md:z-50">
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/research'} onClick={closeDropdown}>Research Area</Link></li>
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/project'} onClick={closeDropdown}>Projects</Link></li>
            </ul>
          )}
        </div>
      </li>
      {/* Publications Dropdown */}
      <li>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="mr-1 md:mr-4 my-3 md:my-0 font-bold text-white"
          >
            Publications
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-slate-700 p-2 space-y-2 rounded-md md:z-50">
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/jurnal'} onClick={closeDropdown}>Journal</Link></li>
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/conferance'} onClick={closeDropdown}>Conferences</Link></li>
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/patents'} onClick={closeDropdown}>Patents</Link></li>
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/awards'} onClick={closeDropdown}>Awards</Link></li>
            </ul>
          )}
        </div>
      </li>
      {/* Members Dropdown */}
      <li>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="mr-1 md:mr-4 my-3 md:my-0 font-bold text-white"
          >
            Members
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-slate-700 p-2 space-y-2 rounded-md md:z-50">
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/teachers'} onClick={closeDropdown}>Teachers</Link></li>
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/students'} onClick={closeDropdown}>Students</Link></li>
            </ul>
          )}
        </div>
      </li>
      {/* About Dropdown */}
      <li>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="mr-1 md:mr-4 my-3 md:my-0 font-bold text-white"
          >
            About
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-slate-700 p-2 space-y-2 rounded-md md:z-50">
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/mission'} onClick={closeDropdown}>Mission and Vision</Link></li>
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/courses'} onClick={closeDropdown}>Courses</Link></li>
              <li><Link className='font-bold text-green-400 hover:font-extrabold' to={'/contact'} onClick={closeDropdown}>Contact Us</Link></li>
            </ul>
          )}
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-700 p-4 font">
      <div className="navbar-start">
        {/* Hamburger Button for Mobile View */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="bg-white hover:text-white btn btn-ghost lg:hidden btn-circle"
            onClick={toggleMenu}
          >
            {/* Toggle between hamburger and cross icons */}
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            )}
          </div>
          {/* Dropdown menu visibility controlled by `isMenuOpen` */}
          {isMenuOpen && (
            <ul tabIndex={0} className="bg-slate-700 menu menu-sm dropdown-content rounded-box z-[1000] mt-3 w-52 shadow">
              {Navlink}
            </ul>
          )}
        </div>
        <Link to='/' className="btn hover:bg-yellow-500 text-xl md:text-2xl lg:text-3xl font-bold animate__zoomIn popin-font">
          Lab Research
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 popin-font">
          {Navlink}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full" title={user?.displayName || 'User name not found'}>
                <img src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/219/219986.png"} alt="User Avatar" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-sm btn-ghost"><Link>{user?.displayName || 'User name not found'}</Link></button>
              </li>
              <li>
                <button onClick={LogOut} className="btn btn-sm btn-ghost">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={'/login'} className="btn bg-yellow-400 font-bold text-base md:text-xl">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
