import { useState, useEffect } from "react";
import "./App.css";

type Post = {
  title: 'string';
  id: 'string';
}

function App() {
  const [items, setItems] = useState([]);
  const [fetchFrom, setFetchFrom] = useState("posts");

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${fetchFrom}`);
      const responseJSON = await response.json();
      setItems(responseJSON)
    };

    // fetchResourceTypes()
  }, [fetchFrom]);

  useEffect(()=>{
    console.log('componentDidMount')

    return () =>{
      console.log('componentWillUnmount')
    }
  }, [])

  const changeFetch = (source: string) => {
    setFetchFrom(source);
  };

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card" style={{display:"flex", alignItems: "center"}}>
        <p>Source of study: {fetchFrom}</p>
        <button onClick={() => changeFetch("posts")}> Posts </button>
        <button onClick={() => changeFetch("comments")}> Comments </button>
        <button onClick={() => changeFetch("todos")}> Todos </button>
      </div>
      {items.map((item:Post) => <p key={item.id}>{item.title}</p>)}
    </>
  );
}

export default App;
