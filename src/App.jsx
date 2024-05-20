import React, { useState } from "react"; 

import "./App.css"; 

function App() { 

  const [display, setDisplay] = useState(""); 
  return ( 

    <main className="App"> 

      <h1>Lovely Calculator</h1> 

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