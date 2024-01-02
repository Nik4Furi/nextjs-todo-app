
"use client"

import React, { useContext } from 'react'
import Context from './Context'
import Link from 'next/link';
import Button from './Button';

import toast from 'react-hot-toast'

const Auth = () => {
  const { user, setUser } = useContext(Context);

  const handleLogout = async () => {
    try {

      const res = await fetch('/api/auth/logout');
      const data = await res.json();

      if (!data.success) return toast.error(data.msg);

      setUser({});

      toast.success(data.msg)

    } catch (error) {
      return toast.error(error);
    }
  }

  return (user?._id ?

    <button onClick={handleLogout} className='p-2 mx-auto my-auto  w-[100%] bg-red-700 hover:bg-red-600 text-white cursor-pointer rounded-md'>Logout</button>
    :
    <div className='mx-2 my-2'>
      <div className="flex items-center">
        <Link href={'/login'} className='hover:text-red-400 text-white mx-2 text-sm'><Button title={"Login"} /></Link>
      </div>
    </div>
  )
}

export default Auth
