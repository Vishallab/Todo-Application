
import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

export default function InputComp() {
     const [todos, setTodos] = useState("")
     const {addTodo} = useTodo()
      
     const add = (e) => {
        e.preventDefault()

        if(!todos) return

        addTodo({id: Date.now(), todo: todos, completed: false})
        setTodos("")
     }

    return(
       <form onSubmit={add} className="w-full flex flex-wrap h-auto justify-center mt-20 relative">
              <input
              id="inputText"
              type="text"
              className="w-3/4 h-10 rounded-xl pl-4 border-none"
              placeholder="Enter Your Task"
              value={todos}
              onChange={(e) => setTodos(e.target.value) }
              />
              <label htmlFor="inputText" className="text-label">Enter Your Task</label>

              <button 
              type="submit"
              className="border-2 border-blue-700 bg-blue-700 w-14 h-10 text-white ml-3 rounded-xl "
              >
                Add
              </button>
       </form>
    )
}