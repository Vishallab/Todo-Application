
import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

export default function InputComp() {
     const [todos, setTodos] = useState("")
     const [isLight, setIsLight] =useState(true)
     const{themeMode, lightMode, darkMode} = useTodo();
     const {addTodo} = useTodo()
      
     const add = (e) => {
        e.preventDefault()

        if(!todos) return

        addTodo({id: Date.now(), todo: todos, completed: false})
        setTodos("")
     }



            const onChangeBtn = (e) => {

            const darkModeStatus = e.currentTarget.checked;

            if(darkModeStatus){
               darkMode()
               setIsLight(false)
            }else{
               lightMode()
               setIsLight(true)
            }
            }

            
    return(
         <div>
            <label className="relative inline-flex items-center cursor-pointer ml-8 mt-10">
   <input
    type="checkbox"
    value=""
    className="sr-only peer"
    onChange={onChangeBtn}
    checked = {themeMode === "dark"}
     />
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
     <span className="ml-3 text-sm font-medium text-gray-900">{
     isLight ? (<p className="text-black">Light Mode</p>)  : (<p className="text-white">Dark Mode</p>)
     }</span>


  </label>

       <form onSubmit={add} className="w-full flex flex-wrap h-auto justify-center mt-20 relative">
              <input
              id="inputText"
              type="text"
              className="w-3/4 h-10 rounded-xl pl-4 border-2 border-slate-300 dark:border-none"
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
       </div>
    )
}