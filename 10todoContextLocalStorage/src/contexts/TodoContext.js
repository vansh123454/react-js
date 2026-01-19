import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo name",
      completed: false
    }
  ],
  addTodo: (todo) => {}, // we do not function defination here
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}

});

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
  return useContext(TodoContext);
}