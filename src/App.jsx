import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let input = e.target.name;
    setDisplay(display.concat(input));
  };

  const handleSolve = (e) => {
    e.preventDefault();
    try {
      let result = eval(display);
      if (result === Infinity) {
        result = "Can't divide by 0";
      }
      setDisplay(result.toString());
    } catch (err) {
      setDisplay("error");
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setDisplay("");
  };

  const handleBackSpace = (e) => {
    e.preventDefault();
    setDisplay(display.slice(0, -1));
  };

  return (
    <main className="App">
      <h1>React Simple Calculator by Miyoko.S</h1>
      <div className="container">
        <form className="screen">
          <input type="text" value={display} readOnly />
        </form>
        <div className="keys">
          <button id="clear" onClick={handleClear}>Clear</button>
          <button name="/" id="operation" onClick={handleClick}>&divide;</button>
          <button id="operation" onClick={handleBackSpace}>del</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" id="operation" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" id="operation" onClick={handleClick}>-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" id="operation" onClick={handleClick}>+</button>
          <button name="=" id="result" onClick={handleSolve}>=</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
        </div>
      </div>
    </main>
  );
}


export default App;
