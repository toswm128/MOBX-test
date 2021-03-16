import React,{useState} from "react";
import {useStore} from "../state/context"
import {observer} from "mobx-react"

export default observer(() =>{
  const {movieStore} = useStore();
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
)
export default App;
