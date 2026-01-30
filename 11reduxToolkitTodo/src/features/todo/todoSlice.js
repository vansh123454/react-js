import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1, text: "Hello World"}] // action = {id, text}
}

export const todoSlice = createSlice({ 
  name: "todo",
  initialState,
  reducers: {
    // in reducers it always takes state and action
    addTodo: (state, action)=>{
      const todo = {
        id: nanoid(), // give you unique id 
        text: action.payload // do not do action.payload.text otherwise it will give you an error. It will automatically understand
      }
      state.todos.push(todo);
      console.log(state.todos, " added");
    },
    removeTodo: (state, action)=>{
      state.todos = state.todos.filter((todo)=>{
        todo.id !== action.payload; // do not do action.payload.id otherwise it will give you an error. It will automatically understand
      })

    },
    updateTodo: (state, action)=>{
      const {id, text} = action.payload;
      const todo = state.todos.find((todo)=>todo.id === id);
      if(todo) todo.text = text;
    }
  }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions; // we need to export this in order to use it in different components
export default todoSlice.reducer;