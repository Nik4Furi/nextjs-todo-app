"use client"

import React, { useContext, useState } from 'react'
import Button from '../Button';
import Link from 'next/link';
import { redirect } from 'next/navigation'

import toast from 'react-hot-toast'
import Context from '../Context';


const LoginForm = () => {
  const [form, setForm] = useState({ name: '', password: '', email: '' });

  //------------ Function to onchange the form data
  const handleOnChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const {setUser} = useContext(Context)

  //--------- Function to adding a new todo
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // if(!form.email || !form.password)
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json();

      if (!data.success) return toast.error(data.msg);

      toast.success(data.msg);

      if (data.success) {
        setUser(data.user);
      }

      setForm({ name: '', email: '', password: '' })

      return redirect('/');


    } catch (error) {
      console.error(error);

      return toast.error(error.message);
    }
  }

  return (
    <>
      <section className="LoginForm w-1/2 mx-auto my-3">
        <form onSubmit={handleRegister} className='flex items-center justify-center md:flex-col borde border-red-900 border-2 rounded-md p-3'>
          <input type="text" name="name" className='p-2 border-2 w-[100%] my-3 mx-2 borde border-red-900 rounded-md' id="name" placeholder='Enter your todo name' value={form.name} onChange={handleOnChange} />
          <input type="email" name="email" className='p-2 border-2 w-[100%] my-3 mx-2 borde border-red-900 rounded-md' id="email" placeholder='Enter your todo email' value={form.email} onChange={handleOnChange} />
          <input type="password" name="password" className='p-2 border-2 w-[100%] my-3 mx-2 borde border-red-900 rounded-md' id="password" placeholder='Enter your password' value={form.password} onChange={handleOnChange} />
          <h5 className="my-3 mx-auto"> <Link href={'/login'}> Already have an account</Link></h5>
          <Button type='submit' title={'Register'} />
        </form>
      </section>
    </>
  )
}

export default LoginForm
