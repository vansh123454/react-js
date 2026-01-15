import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

const myObj = {
  name: "Vansh",
  age: 20,
}
const myArray = [1,2,3];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className=" text-red-300 mb-4">Hello Tailwind</h1>
      <Card username = "chaiaurcode" btntext = "click me" />
      <br />
      <Card username = "once once" btntext="visit me"/>
    </>
  );
}

export default App;
