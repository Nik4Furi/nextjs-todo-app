"use client"

import React, { useState } from 'react'
import Button from './Button'

const TodoForm = () => {
    const [form,setForm] = useState({title:'',description:''});
    
    //------------ Function to onchange the form data
    const handleOnChange = (e) => setForm({...form,[e.target.name]:e.target.value})

    //--------- Function to adding a new todo
    const handleAddNewTodo = (e)=>{
        e.preventDefault();

        console.log(form);
    }

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
