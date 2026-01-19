import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todoName, setTodoName] = useState("");

  const { addTodo } = useTodo();

  const add = (event) => {
    event.preventDefault();
    if (!todoName) return;
    addTodo({ todo: todoName, completed: false }); // we haved passed todo without id but id is generating in App.jsx while adding the todo
    setTodoName("");
  };

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoName}
        onChange={(event) => setTodoName(event.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer"
        onClick={add}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
