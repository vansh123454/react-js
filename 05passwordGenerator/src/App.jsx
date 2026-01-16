import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); // when we click on number, state is changing
  const [charAllowed, setCharAllowed] = useState(false); // when we click on character, state is changing
  const [password, setPassword] = useState("vansh");

  // this hook takes the references of dom element directly
  const passwordReference = useRef(null); // passwordReference is taking null reference

  //useCallback takes the callback and dependecies
  // it is for memoization and optimization for function reusability
  // it memoize function so get optimize
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+`";

    for (let i = 0; i <= length; i++) {
      let charIdx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIdx);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); // in dependency arrat, setPassword is for optimization (optional)

  // here useEffect is for optimization only. It is optional here and in the above code as well
  const copyPasswordToClipboard = useCallback(()=>{
    // if it is not empty then select -> (?.) -> not empty then select
    passwordReference.current?.select(); // it will show user that our value is selected. You can see on app
    // passwordReference.current?.setSelectionRange(0,4); // only till 4 character it will select
    window.navigator.clipboard.writeText(password); // this is for copy the password
  }, [password])


  // passwordGenerator(); // we can not run this function like this. It will give you error
  // it is the perfect way of running the function passwordGenerator() 
  // useEffect runs everytime when dependecies changes 
  // otherwise it run only once if there is no depencies array
  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // here passwordGenerator is optional


  return (
    <>
      <div className="min-h-screen max-w-2xl mx-auto flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4">
        <div className="bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-800 space-y-6">
          <h1 className="text-3xl font-extrabold text-white text-center tracking-wide">
            Password Generator
          </h1>

          <div className="flex gap-3">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordReference} // passwordReference has refence of input password
              className="flex-1 px-4 py-3 rounded-xl bg-black border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <button className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold transition shadow-lg cursor-pointer"
            onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(event) => setLength(event.target.value)}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <label className="text-white text-sm font-medium whitespace-nowrap">
                Length: {length}
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={numberAllowed} // false now 
                onClick={() => setNumberAllowed((prev) => !prev)} // false,true,false,true on every click
                className="w-4 h-4 accent-indigo-500 cursor-pointer"
              />
              <label className="text-white text-sm font-medium">Numbers</label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={charAllowed} // false now
                onClick={() => setCharAllowed((prev) => !prev)} // false,true,false,true on every click
                className="w-4 h-4 accent-indigo-500 cursor-pointer"
              />
              <label className="text-white text-sm font-medium">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
