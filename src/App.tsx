import { useState, useEffect, useRef } from "react";
import "./App.css";



function App() {
  
  const [name, setName] = useState('');

  const previousName = useRef<string>();

  useEffect(()=>{
    previousName.current = name;

  }, [name])
  
  return (
    <>
      <div className="card" style={{display:"flex", alignItems: "center", flexDirection: 'column'}}>
        <input value={name} onChange={(e)=> setName(e.target.value)}/>
        <p>Hello! My name is {name}</p>
        <p>and my name was {previousName.current}</p>
      </div>
    </>
  );
}

export default App;
