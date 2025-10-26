import React from 'react'
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
