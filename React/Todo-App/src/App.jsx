import { useEffect , useState } from "react"

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("todos")

  return savedTodos ? JSON.parse(savedTodos) : []
})
  const [filter,setFilter] = useState("all")

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const addTodo = () => {
    if (task.trim() === "") return
    
    const newTodo = {
      id : Date.now(),
      text : task,
      completed : false
    }
    setTodos([...todos, newTodo])
    setTask("")
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(
      todo => todo.id !== id
    )

    setTodos(updatedTodos)
  }

  const editTodo =(id, updatedText)=>{
    const updatedTodos = todos.map(todo=>{
      if(todo.id === id){
        return {
          ...todo,
          text : updatedText
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo=>{
      if(todo.id === id){
        return {
          ...todo,
          completed : !todo.completed
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const filteredTodos= todos.filter(todo=>{
    if(filter === "completed"){
      return todo.completed
    }
    if(filter === "pending"){
      return !todo.completed
    }
    return true
  })

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
      
      <h1 className="text-3xl font-bold text-center mb-6">
        Todo App
      </h1>

      <TodoForm
        task={task}
        setTask={setTask}
        addTodo={addTodo}
      />

      <div className="flex justify-center gap-2 my-4">
        <button
          onClick={() => setFilter("all")}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Pending
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  </div>
)
}

export default App