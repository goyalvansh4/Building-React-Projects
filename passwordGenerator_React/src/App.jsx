import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_+{}[]~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-4  text-orange-400 bg-gray-700">
        <h1 className="text-white text-center my-3 text-3xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden my-4">
          <input type="text"
          value={password}
           readOnly
           placeholder="password"
           ref={passwordRef}
           className="outline-none w-full py-2 px-3 text-2xl"
            />
            <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-2xl" onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-xl gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={8}
            max={100}
            value={length} 
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
