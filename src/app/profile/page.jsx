"use client"

import Context from '@/components/clients/Context'
import { redirect } from 'next/navigation';
import React, { useContext } from 'react'

const page = () => {
    const {user} = useContext(Context);

    if(!user._id) return redirect('/login');


  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    </>
  )
}

export default page