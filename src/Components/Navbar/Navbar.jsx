import { useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from "react-router-dom";
import '../../../src/index.css';
import { Typewriter } from 'react-simple-typewriter';

const Navbar = () => {
  // const { LogOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
// console.log(isMenuOpen)
  const Navlink = (
    <>
      <li className='relative'>
        <NavLink
          className="px-3 py-2 text-black font-semibold rounded-md transition-colors hover:bg-yellow-500"
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-black font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            Research
          </summary>
          <ul className="lg:absolute left-0 p-3  bg-slate-800 space-y-4 rounded-md shadow\z-lg hidden group-hover:block ">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/research'}>Research Area</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/project'}>Projects</Link></li>
          </ul>
        </details>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-black font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            Publications
          </summary>
          <ul className="lg:absolute left-0 p-3  bg-slate-800 space-y-4 rounded-md shadow-lg hidden group-hover:block">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/journal'}>Journal</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/conferance'}>Conferences</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/patents'}>Patents</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/awards'}>Awards</Link></li>
          </ul>
        </details>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-black font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            Members
          </summary>
          <ul className="lg:absolute left-0 p-3  bg-slate-800 space-y-4 rounded-md shadow-lg hidden group-hover:block">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/teachers'}>Professors</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/students'}>Students</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/alumni'}>Alumni</Link></li>
          </ul>
        </details>
      </li>
      <li className='relative'>
        <details className="group lg:relative">
          <summary className="px-3 py-2 text-black font-semibold cursor-pointer rounded-md transition-colors hover:bg-yellow-500">
            About Lab
          </summary>
          <ul className="lg:absolute left-0 p-3 bg-slate-800 space-y-4 rounded-md shadow-lg hidden group-hover:block">
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/mission'}>Mission and Vision</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/courses'}>Courses</Link></li>
            <li><Link className="text-yellow-300 font-semibold hover:text-yellow-400" to={'/contact'}>Contact Us</Link></li>
          </ul>
        </details>
      </li>
    </>
  );

  return (

<div className="navbar bg-sky-200 fixed top-0 left-0 w-full z-50 ">
      <div className="navbar-start">
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden btn-circle ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52  shadow space-y-3">
        {Navlink}

      </ul>
    </div>

        <Link to='/' className="text-lg md:text-xl lg:text-3xl font-bold animate__zoomIn  popin-font text-black flex">
        <img className='w-12 lg:w-20 h-8 lg:h-12' src="/re-do.png" alt="" />
<Typewriter
words={['DIoT Lab']}
loop={3}
typeSpeed={70}
deleteSpeed={100}
delaySpeed={700}
></Typewriter>

        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-4 items-center  px-1 popin-font z-[1000]">
          {Navlink}
        </ul>
      </div>
      {/* <div className="navbar-end">
        {
          user?<div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full " title={user?.displayName || 'User name not found'}>
                  <img className="" src={user?.photoURL? user.photoURL : "https://cdn-icons-png.flaticon.com/512/219/219986.png" } />
              </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
 <p className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</p>

              </li>
              <li>
                  <button
                      onClick={LogOut}
                      className="btn btn-sm  btn-ghost">Logout</button>

              </li>
          </ul>
      </div>
      :
      <Link to={'/login'} className="btn  text-black  text-base lg:text-lg">Login</Link>
        }

      </div> */}
    </div>


  );
};

export default Navbar;