import React from 'react'
<<<<<<< HEAD
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row m-4 justify-between items-center border-b-2 border-[#5d2815] p-4'>
      <div>
      <h1 className='italic text-3xl font-bold'>Snipora</h1>
    </div>
    <div className='flex flex-row gap-12 place-content-end text-2xl font-bold-500'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pastes">Pastes</NavLink>
    </div>
    </div>
  )
}

export default Navbar
=======
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <nav className='flex justify-between p-4 border-b-2 border-black mb-8'>
              <h1 className='font-Italiano font-400 text-5xl'>Snipora</h1>
              <div className='flex'>
                  <h3 className='mr-4  text-2xl'><Link to="/">Home</Link></h3>
                  <h3 className='text-2xl'><Link to="/paste">Pastes</Link></h3>
              </div>
          </nav>
      </div>
  )
};

export default Navbar;
>>>>>>> d85bbff2dec2daad079d3defac003ca6e488db1b
