
"use client"

import React, { useContext } from 'react'
import Context from './Context'
import Link from 'next/link';
import Button from './Button';

const Auth = () => {
  const user = useContext(Context);
  // console.log(user)
  return (
    <>
      <div className="flex items-center">
        <div className='mx-2 my-2'>

          <Link href={'/login'} className='hover:text-red-400 text-white mx-2 text-sm'><Button title={"Login"} /></Link>
        </div>
        <Link href={'/logout'} className='hover:text-red-400 text-white mx-2 text-sm'><Button title={"Logout"} /></Link>
      </div>
    </>
  )
}

export default Auth
