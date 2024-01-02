"use client"

import React from 'react'

const Button = ({title,type}) => {
  return (
    <>
      <button type={type} className='p-2 mx-auto my-auto  w-[100%] bg-red-700 hover:bg-red-600  text-white cursor-pointer rounded-md '>{title}</button>
    </>
  )
}

export default Button
