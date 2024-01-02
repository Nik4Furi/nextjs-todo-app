
"use client"

import React, { useEffect, useState } from 'react'
import Context from './Context'

const State = ({children}) => {
    const a = "Nikhil";

    const [user,setUser] = useState({});

    useEffect(()=>{
      fetch('/api/me').then(res => res.json()).then(data =>{
        if(data.success) setUser(data.user)
      })
    },[])


  return (
    <>
      <Context.Provider value={{a,user,setUser}}>
        {children}
      </Context.Provider>
    </>
  )
}

export default State
