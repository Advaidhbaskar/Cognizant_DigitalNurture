import React, { useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {

  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert("Hello! Member!");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (

    <div style={{ margin: "30px" }}>

      <h3>{count}</h3>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("welcome")}>
        Say welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <br /><br />

      <CurrencyConverter />

    </div>

  );

}

export default App;
