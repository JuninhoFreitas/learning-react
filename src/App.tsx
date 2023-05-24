import { useReducer, useState } from "react";
import "./App.css";

const reducer = (state: { tasks: string[] }, action: { type: string, payload: 'string' }) => {
  switch (action.type) {
    case "add-task":
      return {
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        tasksCount: state.tasksCount + 1,
      };
    case "toggle-task":
        return {
          ...state,
          tasks: state.tasks.map((item, index) => index === action.payload ? {...item, isCompleted: !item.isCompleted } : true)
        }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0});
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="card" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button onClick={() => dispatch({ type: "add-task", payload: inputValue })}>Adicionar</button>
        {state.tasks.map((task, index) => <p onClick={()=>dispatch({type: 'toggle-task', payload: index})} style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}>{task.name}</p>)}
      </div>
    </>
  );
}

export default App;
