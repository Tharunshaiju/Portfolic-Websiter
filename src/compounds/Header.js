import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/16/solid'

const Header = () => {
  const [toggelMenu,settoggelMenu]=useState(false)


  return (
    <header className='flex justify-between px-5 py-2 bg-primary'>
      <a className='font-bold text-black' href='#'>S tharun</a>
      <nav className='hidden md:block'>
      <ul className='flex text-white'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#resume'>Resume</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      </nav>
      
      {toggelMenu && <nav className='block md:hidden '>
      <ul onClick={()=>settoggelMenu(!toggelMenu)} className='flex flex-col text-white left-0 top-0 mobile-nav'>
        <li><a href='/'>Home</a></li> 
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
       </nav>}

      <button onClick={()=>settoggelMenu(!toggelMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>

    </header>
  )
}

export default Header
