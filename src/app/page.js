import TodoForm from "@/components/clients/TodoForm";
import ShowTodos from "@/components/clients/Todos/ShowTodos";


export default function Home() {
  return (
   <>
    <div className="container mx-auto my-3">
      <h1 className="text-3xl text-center">Add a your todo-list</h1>
      <p className="text-center">Make your daily life acchievement.... 🪟</p>

      {/* Form component to adding the todos  */}
      <TodoForm />

      {/* Here we showing our all todos  */}
      <div className="container mx-auto my-3">
        <h1 className="text-xl my-2 font-bold">Your Todos</h1>

        {/* Component to showing all the todos  */}
        <ShowTodos title={"Title of the todo"} description={"Sample descripiton of the todos "} />
      </div>
    </div>
   </>
  )
}
