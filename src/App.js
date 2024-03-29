import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rajinikanth VAdla DevOps Application</h1>
        <p>Counter: {counter}</p>
        <div>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
