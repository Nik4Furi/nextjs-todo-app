"use client"

import React, { useState } from 'react'

const ShowTodosCheckBox = ({completed,id}) => {
    const [checkbox,setCheckbox] = useState(false);

    const handleDelete = (id)=>{
        console.log('DELETE', id)
    }

  return (
    <>
      <input type="checkbox" value={checkbox} checked={completed} onChange={()=>setCheckbox(prev => !prev)} name="completed" id="completed" className='mx-2 size-5 cursor-pointer ' />
      <div className="mx-2">
      <button onClick={handleDelete} className='p-2 mx-auto my-auto  w-[100%] bg-red-700 hover:bg-red-600 text-white cursor-pointer rounded-md'>DELETE</button>
      </div>
    </>
  )
}

export default ShowTodosCheckBox
