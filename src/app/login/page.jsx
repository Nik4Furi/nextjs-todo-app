"use client"

import React, { useContext, useState } from 'react'
import Link from 'next/link';
import {redirect} from 'next/navigation'
import Button from '@/components/clients/Button';
import Context from '@/components/clients/Context';

import toast from 'react-hot-toast';


const page = () => {

  const [form, setForm] = useState({ email: '', password: '' });

  const {user,setUser} = useContext(Context);

  //------------ Function to onchange the form data
  const handleOnChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  //--------- Function to adding a new todo
  const handleLogin = async(e) => {
    e.preventDefault();

    console.log(form);

    try {
      // if(!form.email || !form.password)
        const res = await fetch('/api/auth/login',{
          method : 'POST',
          headers : {
            'Content-Type':"application/json"
          },
          body:JSON.stringify(form)
        })

        const data = await res.json();

        if(!data.success){
          toast.error(data.msg);

          return;
        }
        

        console.log('data ',data);

        toast.success(data.msg);

        if(data.success){
          setUser(data.user);
        }
    } catch (error) {
      console.error(error);

      
    }
  }


  if(user._id)
    return redirect('/');


  return (
    <>
      <div className="container mx-auto my-3">
        <h1 className=" text-xl text-center">Login, to access your todos</h1>


        {/* Login form component  */}
        <div className="my-3">
          <section className="LoginForm w-1/2 mx-auto my-3">
            <form method='POST' onSubmit={handleLogin} className='flex items-center justify-center md:flex-col borde border-red-900 border-2 rounded-md p-3'>
              <input type="email" name="email" className='p-2 border-2 w-[100%] my-3 mx-2 borde border-red-900 rounded-md' id="email" placeholder='Enter your todo name' value={form.email} onChange={handleOnChange} required />
              <input type="password" name="password" className='p-2 border-2 w-[100%] my-3 mx-2 borde border-red-900 rounded-md' id="password" placeholder='Enter your password' value={form.password} onChange={handleOnChange} required />
              <h5 className="my-3 mx-auto"> <Link href={'/register'}> Create a new account</Link></h5>
              <Button type='submit' title={'Login'} />
            </form>
          </section>
        </div>

      </div>
    </>
  )
}

export default page
