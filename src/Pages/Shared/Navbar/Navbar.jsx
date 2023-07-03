import React from 'react';
import { FaRProject } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const options=<>
    <Link className='px-3' to="/">Home</Link>
    <Link className='px-3' to="/about">About</Link>
    <Link className='px-3' to="/services">Service</Link>
    <Link className='px-3' to="/skills">Skills</Link>
    <Link className='px-3' to="/contact">Contact</Link>
    </>
    return (
        <div className="navbar bg-blue-950 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] px-3 shadow rounded-box w-52">
                        {options}
                    </ul>
                </div>
               <p className='text-5xl font-semibold text-rose-500'><FaRProject></FaRProject></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='bg-white text-blue-950 font-semibold px-6 py-2 rounded-lg hover:bg-red-300'><Link to="/contact">Hire Me</Link></button>
            </div>
        </div>
    );
};

export default Navbar;