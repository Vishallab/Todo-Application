import { useEffect, useState } from 'react'

import InputComp from './Components/InputComp'
import Todolist from './Components/Todolist'
import { TodoProvider } from './Context/TodoContext'

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todo) => {
   setTodo((prevTodo) => [{id: Date.now(), ...todo}, ...prevTodo])
  }

 const updateTodo = (id, todo) => {
   setTodo((prevTodo) => prevTodo.map((prev) => (
     prev.id === id ? todo : prevTodo 
   )))
 }

 const deleteTodo = (id) => {
  setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
 }

 const toggleCompleted = (id) => {
  setTodo((prevTodo) => 
    prevTodo.map((prev) => 
      prev.id === id ? {...prev, completed: !prev.completed} : prev
    )
  )
 }

//  local storage code

    useEffect( () => {
       const todo = JSON.parse(localStorage.getItem("todos"))

       if (todo && todo.length > 0){
        setTodo(todo)
       }
    }, [])
  
    useEffect( () => {
      localStorage.setItem("todos", JSON.stringify(todo))
    }, [todo])

  return (
    <TodoProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
   <div className='w-full flex flex-wrap h-screen p-8'>
       <div className='border-2 border-red-800 w-1/2'>
        <InputComp/>
      </div>

        <div className='border-2 border-red-800 w-1/2 pt-16'>
           {
            todo.map((todo) => (
              <div key={todo.id}
              className='w-full'
              >
             <Todolist todo= {todo} />

              </div>
            ))
           }
       </div>
     </div>
     </TodoProvider>
  )
}

export default App
