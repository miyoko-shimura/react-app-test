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
    try{
      let result = eval(display)
      setDisplay(result.toString());
      if (result === Infinity) {
        result = "Can't devide by 0"
        setDisplay(result.toString());
      }
    } catch(err){
      setDisplay("error");
    }
  };

  //handling reset
  const handleClear = (e) => {
    e.preventDefault();
    setDisplay("");
  };

  //handling backspace
  const handleBackSpace = (e) => {
    setDisplay(display.slice(0, -1));
  };

  return ( 

    <main className="App"> 

      <h1>Simple Calculator</h1> 

      <div className="container"> 

        <form className="screen"> 

          <input type="text" /> 

        </form> 

        <div className="keys"> 

          <button id="clear">Clear</button> 

          <button name="/" id="operation">&divide;</button> 

          <button id="operation">del</button> 

          <button name="7">7</button> 

          <button name="8">8</button> 

          <button name="9">9</button> 

          <button name="*" id="operation">&times;</button> 

          <button name="4">4</button> 

          <button name="5">5</button> 

          <button name="6">6</button> 

          <button name="-" id="operation">-</button> 

          <button name="1">1</button> 

          <button name="2">2</button> 

          <button name="3">3</button> 

          <button name="+" id="operation">+</button> 

          <button name="=" id = "result">=</button> 

          <button name="0">0</button> 

          <button name=".">.</button> 

        </div> 

      </div> 

    </main> 

  ); 

} 

export default App; 
