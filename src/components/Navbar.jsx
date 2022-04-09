import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Zoom } from 'react-reveal';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  };
  const handleClose = () => setNav(!nav);

  return (
    <div id="header">
      <Zoom>
        <div
          style={{ background: 'lightblue' }}
          className="w-screen h-[80px] z-10  fixed drop-shadow-lg"
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
                <NavLink to="/">
                  <a>CLOUDY</a>
                </NavLink>
              </h1>
              <ul className="hidden md:flex">
                <li>
                  <NavHashLink
                    to="home#home"
                    className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/home#abt"
                    className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                    smooth={true}
                    offset={-200}
                    duration={500}
                  >
                    About
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink as={HashLink}
                    className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                    to="/home#support"
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Support
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink as={HashLink}
                    to="/home#plat"
                    className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Platforms
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink as={HashLink}
                    to="/home#price"
                    className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Pricing
                  </NavHashLink>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex pr-4">
              <button onClick={handleLogin} className="border-none bg-transparent text-black mr-4">
                Sign In
              </button>
              <button onClick={handleRegister} className="px-8 py-3">
                Sign Up
              </button>
            </div>
            <div className="md:hidden mr-4 '" onClick={handleClick}>
              {!nav ? (
                <MenuIcon className="w-5 cursor-pointer" />
              ) : (
                <XIcon className="w-5 cursor-pointer" />
              )}
            </div>
          </div>

          <ul
            style={{ background: 'lightblue' }}
            className={!nav ? 'hidden' : 'absolute  w-full px-8'}
          >
            <li className="border-b-2 border-zinc-300 w-full">
              <Link
                className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                onClick={handleClose}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavHashLink
                className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                onClick={handleClose}
                to="/home#abt"
                smooth={true}
                offset={-200}
                duration={500}
              >
                About
              </NavHashLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavHashLink
                className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                onClick={handleClose}
                to="/home#support"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Support
              </NavHashLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavHashLink
                className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                onClick={handleClose}
                to="/home#plat"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Platforms
              </NavHashLink>
            </li>
            <li className="border-b-2 border-zinc-300 w-full">
              <NavHashLink
                className="cursor-pointer hover:border-b-4 border-indigo-500 hover:pb-2"
                onClick={handleClose}
                to="/home#price"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Pricing
              </NavHashLink>
            </li>

            <div className="flex flex-col my-4">
              <button 
                onClick={handleRegister}
                className="bg-transparent text-indigo-600 px-8 py-3 mb-4"
              >
                Sign In
              </button>

              <button onClick={handleLogin} className="px-8 py-3">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </Zoom>
    </div>
  );
};

export default Navbar;
