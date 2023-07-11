import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/broccoli-vegetable-svgrepo-com.svg'

const Header = () => {
  return (
    <NavLink 
    className='flex justify-center p-1 shadow-sm bg-zinc-800 shadow-zinc-950'
    to={'/'} >
      <div className='flex items-center gap-2 p-2 text-xl rounded-md hover:bg-zinc-700' >
        <Logo/>
        <span>Log-A-Cal</span>
      </div>
    </NavLink>
  )
}

export default Header