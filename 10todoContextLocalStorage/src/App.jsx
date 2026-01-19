import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // name should be same
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]); // todo itself its obj that is why we use id and spread operator
  };

  const updateTodo = (id, todo) => {
    // prev me previoud todo array hai
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  // prevTodo, todo is {
  //     id: 1,
  //     todo: "Todo name",
  //     completed: false
  //   }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  // in this we need to change completed from each todo that we wrote in TodoContex
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  // when reload the page
  // first mount
  useEffect(() => {
    // localStorage me data string me store hota hai to jb hum todos ko get krenge to object me hona isiliye humne JSON.parse liya jo string ko obj me convert krta hai
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    // setTodos(storedTodos); // if todos are empty then it will not set
    if(storedTodos && storedTodos.length > 0){
      setTodos(storedTodos); // now it will set
    }
  }, []);

  // when reload the page
  // first mount
  useEffect(() => {
    // setItem ke time humari dependency rehgi todos ki jb bhi todos me change ho to ye run ho jaaye
    // JSON.stringify -> obj ko string me convert krta hai
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* when you use loop you must pass key it boost performance */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                {console.log(todo)}
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
