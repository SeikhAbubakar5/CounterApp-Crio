import React, { useState } from 'react';
import './App.css';

function App() {
  const [count ,serCount]=useState(0)

  const handleIncrement=()=>{
      serCount(count+1)
  }
  const handleDecrement=()=>{
    serCount (count-1)
}
  return (
    <div className="App">
        <h1>Counter App</h1>
        <div>
          <p>Count: {count}</p>
          <button onClick={()=>handleIncrement()}>Increment</button>
          <button onClick={()=>handleDecrement()}>Decrement</button>
        </div>
    </div>
  );
}

export default App;
