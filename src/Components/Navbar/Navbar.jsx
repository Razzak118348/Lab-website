import { useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from "react-router-dom";
import '../../../src/index.css';

const Navbar = () => {
  // const { LogOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navlink = (
    <>
      <li className='relative'>
        <NavLink
          className="px-3 py-2 text-white font-semibold rounded-md transition-colors hover:bg-yellow-500"
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-white font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            Research
          </summary>
          <ul className="lg:absolute left-0 p-3 mt-1 bg-slate-800 space-y-4 rounded-md shadow\z-lg hidden group-hover:block ">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/research'}>Research Area</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/project'}>Projects</Link></li>
          </ul>
        </details>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-white font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            Publications
          </summary>
          <ul className="lg:absolute left-0 p-3 mt-1 bg-slate-800 space-y-4 rounded-md shadow-lg hidden group-hover:block">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/journal'}>Journal</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/conferance'}>Conferences</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/patents'}>Patents</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/awards'}>Awards</Link></li>
          </ul>
        </details>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-white font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            Members
          </summary>
          <ul className="lg:absolute left-0 p-3 mt-1 bg-slate-800 space-y-4 rounded-md shadow-lg hidden group-hover:block">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/teachers'}>Professors</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/students'}>Students</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/alumni'}>Alumni</Link></li>
          </ul>
        </details>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-white font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            About Lab
          </summary>
          <ul className="lg:absolute left-0 p-3 mt-1 bg-slate-800 space-y-4 rounded-md shadow-lg hidden group-hover:block">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/mission'}>Mission and Vision</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/courses'}>Courses</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/contact'}>Contact Us</Link></li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <nav className="bg-slate-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo - Only visible on large screens or when the menu is closed on small screens */}
      <Link to="/" className={`text-2xl font-bold text-yellow-500 hover:text-yellow-400 ${isMenuOpen ? 'hidden lg:block' : ''}`}>
        DIoT Lab
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className={`lg:flex hidden navbar-center`}>
        <ul className="flex space-x-4 items-center z-[1000]">
          {Navlink}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden lg:absolute top-16 left-0 w-full bg-slate-800 shadow-lg z-[1000]">
          <ul className="flex flex-col items-start p-4 space-y-3">
            {Navlink}
          </ul>
        </div>
      )}
    </div>
  </nav>

  );
};

export default Navbar;