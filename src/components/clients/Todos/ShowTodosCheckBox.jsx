"use client"

import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import toast from 'react-hot-toast'

const ShowTodosCheckBox = ({completed,id}) => {

    const router = useRouter();

    const handleDelete = async(id)=>{
        try {
          const res =   await fetch(`/api/task/${id}`,{
              method:'DELETE'
          })
          const data = await res.json();

          if(!data.success) return toast.error(data.msg);

          toast.success(data.msg);

          router.refresh();

        } catch (error) {
          return toast.error(error.message);
        }
    }

    let complete = completed;
    const handleUpdate = async(id)=>{
    
      console.log(id)
      try {
        const res =  await fetch(`/api/task/${id}`,{
            method:'PUT'
        })
        const data = await res.json();

        if(!data.success) return toast.error(data.msg);

        toast.success(data.msg);

        complete = !complete

        router.refresh();

      } catch (error) {
        console.log(error)
        // toast.error(error);
      }
  }

  return (
    <>
      <input type="checkbox" checked={completed} onChange={()=>handleUpdate(id)} name="completed" id="completed" className='mx-2 size-5 cursor-pointer ' />
      <div className="mx-2">
      <button onClick={handleDelete} className='p-2 mx-auto my-auto  w-[100%] bg-red-700 hover:bg-red-600 text-white cursor-pointer rounded-md'>DELETE</button>
      </div>
    </>
  )
}

export default ShowTodosCheckBox
