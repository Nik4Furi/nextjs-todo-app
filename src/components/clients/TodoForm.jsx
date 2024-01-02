"use client"

import React, { useContext, useState } from 'react'
import Button from './Button'
import toast from 'react-hot-toast'

import {redirect, useRouter} from 'next/navigation'
import Context from './Context'

const TodoForm = () => {
    const [form,setForm] = useState({title:'',description:''});

    const {user} = useContext(Context)

    const router = useRouter();
    
    //------------ Function to onchange the form data
    const handleOnChange = (e) => setForm({...form,[e.target.name]:e.target.value})

    //--------- Function to adding a new todo
    const handleAddNewTodo = async(e)=>{
        e.preventDefault();

        console.log(form);

        try {
            const res = await fetch('/api/newtask',{
              method:'POST',
              headers : {
                'Content-Type' : "application/json"
              },
              body: JSON.stringify(form)
            });

            const data = await res.json();

            console.log('data',data);

            if(!data.success) return toast.error(data.msg);

            toast.success(data.msg);

            router.refresh();

            setForm({title:'',description:''})


        } catch (error) {
          return toast.error(error.message);
        }
    }

    if(!user._id) return redirect('/login');

  return (
    <>
      <div className="TodoForm my-3 mx-auto w-[80%]">
        <form onSubmit={handleAddNewTodo}>
            <input type="text" name="title" id="title" className='p-2 border-2 w-[100%] my-3 mx-2 borde border-red-900 rounded-md' placeholder='Enter your todo title' value={form.title} onChange={handleOnChange} />
            <textarea rows={'5'} name='description' className='p-2 border-2 w-[100%] my-3 mx-2 borde border-red-900 rounded-md' id='description' placeholder='Enter your todo description' value={form.description} onChange={handleOnChange} />
            <div className='w-[100%] mx-auto my-3'>

            <Button type='submit' title={'Add Todo'} />
            </div>
        </form>
      </div>
    </>
  )
}

export default TodoForm
