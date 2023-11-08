import React, {useState} from "react";
import { useTodo } from "../Context/TodoContext";


export default function Todolist({todo}) {
    const [isEditable, setIsEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleCompleted} = useTodo()
    console.log(todo)
    
        const editTodo = () => {
            updateTodo(todo.id, {...todo, todo: todoMsg})
            setIsEditable(false)
        }

        const toggleComplete = () => {
            toggleCompleted(todo.id)
        }


    return (
        <div className={`w-3/4 flex m-auto mt-3 h-10 bg-white border-2 border-white rounded-xl ${
            todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>

            <input
            type="checkbox"
            className="ml-2"
            checked ={todo.completed}
            onChange={toggleComplete}
            />

            <input
            type="text"
            className={`ml-2 w-5/6 pl-3 h-8 mt-[2px] rounded-lg ${
                isEditable ? "border-black/10 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            readOnly={!isEditable}
            onChange={(e) => setTodoMsg(e.target.value)}
            />
            
            <button
            className="border border-gray-100 rounded-lg w-8 h-8 bg-gray-50 hover:bg-gray-200 ml-2 mt-[3px]"
            onClick={() => {
                if (todo.completed) return;

                if(isEditable){
                    editTodo()
                }else setIsEditable((prev) => !prev)
                
            }}
            disabled={todo.completed}
            >
            { isEditable ? "📁" : "✏️"}
            </button>
            <button
            className="border border-gray-100 rounded-lg w-8 h-8 bg-gray-50 hover:bg-gray-200 ml-2 mt-[3px]"
            onClick={() => deleteTodo(todo.id)}
            >
                 ❌
            </button>
        </div>
    )
}
