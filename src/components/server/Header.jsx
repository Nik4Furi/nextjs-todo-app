import Link from 'next/link'
import React, { useContext } from 'react'
import Button from '../clients/Button'
import Auth from '../clients/Auth'

const Header = () => {
  return (
    <>
      <div className="header bg-black mb-2 flex items-center justify-evenly">
        <div>
            <h1 className='text-white text-2xl cursor-pointer'>Todo-App</h1>
        </div>
        <nav >
            <ul className='flex items-center justify-center md:flex-row p-3'>
                <li><Link href={'/'} className='hover:text-red-400 text-white mx-2 text-sm'>Home</Link></li>
                <li><Link href={'/profile'} className='hover:text-red-400 text-white mx-2 text-sm'>Profile</Link></li>
                <li><Auth /></li>
            </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
