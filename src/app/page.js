

import TodoForm from "@/components/clients/TodoForm";
import Todos from '../components/clients/todos'
import { Suspense } from "react";

const Home = async () => {

  return (
    <>
      <div className="container mx-auto my-3">
        <h1 className="text-3xl text-center">Add a your todo-list</h1>
        <p className="text-center">Make your daily life acchievement.... 🪟</p>

        {/* Form component to adding the todos  */}
        <TodoForm />

        {/* Here we showing our all todos  */}
        <div className="container mx-auto my-3">
          <Suspense fallback={<div>loading...</div>}>
            <Todos />
          </Suspense>
        </div >
      </div>
    </>
  )
}


export default Home;