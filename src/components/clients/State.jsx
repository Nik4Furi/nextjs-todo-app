
"use client"

import React, { useState } from 'react'
import Context from './Context'

const State = ({children}) => {
    const a = "Nikhil";

    const [user,setUser] = useState({});


  return (
    <>
      <Context.Provider value={{a,user,setUser}}>
        {children}
      </Context.Provider>
    </>
  )
}

export default State
