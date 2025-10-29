import React from 'react'
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