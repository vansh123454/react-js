import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // it will work as well
  // let [counter, setCounter] = useState(15); // setCounter is method which is responsible for counter's updation

  const [counter, setCounter] = useState(15); // setCounter is method which is responsible for counter's updation

  // let counter = 15;

  // const increseValue = () =>{
  //   // console.log("clicked", Math.random());
  //   console.log("clicked", counter);
  //   counter = counter + 1; // it will not reflect to the UI
  // }
  const increseValue = () =>{
    if(counter === 20){}
    else {
      // this is for normal
      // setCounter(counter + 1); // it takes callback

      // will it be showing directly 19 -> no
      // setCounter(counter + 1); 
      // setCounter(counter + 1); 
      // setCounter(counter + 1); 
      // setCounter(counter + 1);  

      // name does not matter. And now it will increse by 1, four time
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1); 
      // setCounter((prevCounter) => prevCounter + 1); 
      // setCounter((prevCounter) => prevCounter + 1); 

      // both are same
      // name does not matter. And now it will increse by 1, four time
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);
      setCounter((counter) => counter + 1);

    } 
  }

  const decreseValue = () =>{
    if(counter === 0) {}
    else setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hey Vansh</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={increseValue}
      >Increse by 1 : {counter} </button>
      <br />
      <button
      onClick={decreseValue}
      >Decrese by 1 : {counter} </button>
    </>
  )
}

export default App
