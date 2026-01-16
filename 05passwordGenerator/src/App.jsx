
import { useState, useCallback } from 'react'

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); // when we click on number, state is changing
  const [charAllowed, setCharAllowed] = useState(false);// when we click on character, state is changing
  const [password, setPassword] = useState("vansh");

  //useCallback takes the callback and dependecies
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%^&*()_+`';

    for (let i = 0; i < str.length; i++) {
      let charIdx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIdx);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);


  return (
    <>
      <div className="min-h-screen max-w-2xl mx-auto bg-black">
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
            Password Generator
          </h1>

          <input 
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
      </div>

    </>
  )
}

export default App
