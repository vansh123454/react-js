import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex gap-3">
          <button
            className="px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:scale-105 transition hover:cursor-pointer"
            // onClick={setColor()} // we can not do like this, it will give error
            onClick={() => setColor("red")} // this is right of doing.
          >
            Red
          </button>

          <button
            className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium hover:scale-105 transition hover:cursor-pointer"
            onClick={() => setColor("blue")} // this is right of doing.
          >
            Blue
          </button>

          <button
            className="px-4 py-2 rounded-full bg-green-500 text-white font-medium hover:scale-105 transition hover:cursor-pointer"
            onClick={() => setColor("green")} // this is right of doing.
          >
            Green
          </button>

          <button
            className="px-4 py-2 rounded-full bg-yellow-400 text-black font-medium hover:scale-105 transition hover:cursor-pointer"
            onClick={() => setColor("yellow")} // this is right of doing.
          >
            Yellow
          </button>

          <button
            className="px-4 py-2 rounded-full bg-black text-white font-medium hover:scale-105 transition hover:cursor-pointer"
            onClick={() => setColor("black")} // this is right of doing.
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
