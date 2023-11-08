import { createContext, useContext } from "react";

 export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "Watchin Naruto",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
   themeMode: "light",
   darkMode: () => {},
   lightMode: () => {},
});

 export const useTodo = () => {
   return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;
