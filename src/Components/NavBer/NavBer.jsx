'use client'
import React from 'react';
import { FaHome, FaBars, FaCog } from "react-icons/fa";

const NavBer = () => {
    const navList = <>
    <li> <a href="/"><FaHome></FaHome>Home</a> </li>
    <li> <a href="/"><FaBars></FaBars>Contents</a> </li>
    <li> <a href="/"><FaBars></FaBars>Categories</a> </li>
    <li><a href="/"><FaCog></FaCog>Setting</a></li>
    </>
    return (
        <div className="navbar lg:bg-black lg:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navList
              }
            </ul>
          </div>
          <p className='text-white'>Dashboard</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {
            navList
         }
          </ul>
        </div>
        <div className="navbar-end">
          <a href='/login' className="btn">Login</a>
        </div>
      </div>
    );
};

export default NavBer;