import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(input)); // dispatch, reducers ke through store me value add krta hai
    setInput('');
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter todo ..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={addTodHandler}>Submit</button>
      </form>
    </>
  );
};

export default AddTodo;
