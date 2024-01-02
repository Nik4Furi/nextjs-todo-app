
import React from 'react'

import {cookies} from 'next/headers'
import ShowTodos from './Todos/ShowTodos';

const FetchTodos = async(token)=>{
    try {
      const res = await fetch(`${process.env.URL}/api/mytask`,{
        cache : 'no-cache',
        headers : {
          cookie: `token=${token}`
        }
  
      })
      const data = await res.json();
  
      if(!data.success){ 
        toast.error(data.msg);
        return  [];
      }
  
      return data.tasks;
  
    } catch (error) {
      return  [];
    }
  }
  

const todos = async() => {

    const token = cookies().get('token')?.value;

    const tasks = await FetchTodos(token);

    return (
        <>
            <h1 className="text-xl my-2 font-bold">Your Todos</h1>

            {/* Component to showing all the todos  */}
            {tasks.length === 0 || !tasks && <p>No task here, to show you ADD NOW!</p>}
            {
                tasks && tasks.map((item, i) => {
                    return <ShowTodos key={i} title={item.title} description={item.description} completed={item.completed} id={item._id} />
                })
            }

    </>
  )
}

export default todos
