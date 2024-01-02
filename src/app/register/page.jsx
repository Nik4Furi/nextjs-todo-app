import RegisterForm from '@/components/clients/Register/RegisterForm'
import React from 'react'

export const metadata = {
    title:"Register, todo-app",
    description:"Register, to become member of our community"
}

const page = () => {
  return (
    <>
      <div className="container mx-auto my-3">
        <h1 className=" text-xl text-center">Register, to become member of our community</h1>


        {/* Login form component  */}
        <div className="my-3">
            <RegisterForm />
        </div>

      </div>
    </>
  )
}

export default page
