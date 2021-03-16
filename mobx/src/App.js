import React,{useState} from "react";

function App() {
  const [count, countItem] = useState(0)
  return (
    <div className="App">
      <h1>App.js</h1>
      <p>{count}</p>
      <button onClick={()=>{countItem(count+1)}}>+</button>
      <button onClick={()=>{countItem(count-1)}}>-</button>
    </div>
  );
}

export default App;
