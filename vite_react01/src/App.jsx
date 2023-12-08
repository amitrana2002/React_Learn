import {useState} from 'react'    

function App() {

  const [count,setCount]=useState(0);

  const addvalue=()=>{
    setCount(count+1);
  }
  
  const decrement=()=>{
    setCount(count-1);
  }
  return (
    <div>
        <h1>Hello React Vite</h1>
        <h2>Count Value : {count}</h2>
        <button 
        onClick={addvalue}
        >Add Value: {count}</button>
        <br/>
        <button 
        onClick={decrement}
        >Remove Value: {count}</button>
    </div>
  )
}

export default App
