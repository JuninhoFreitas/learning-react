import { useState, useEffect, useRef } from "react";
import "./App.css";



function App() {
  
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  }
  return (
    <>
      <div className="card" style={{display:"flex", alignItems: "center", flexDirection: 'column'}}>
        <input ref={inputRef} value={name} onChange={(e)=> setName(e.target.value)}/>
        <p>Hello! My name is {name}</p>
        <button onClick={focusInput}> Focus Input</button>
      </div>
    </>
  );
}

export default App;
