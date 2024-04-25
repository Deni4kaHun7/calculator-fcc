import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let lastInput = "0"
  const [output, setOutput] = useState("0")

  function clearOutput() {
    setOutput("0");
    lastInput = "0";
  }

  function changeOutput(event){
    if(output.includes("=")){
      clearOutput()
    }

    const userInput = event.target.innerText;
    lastInput = userInput;
    setOutput(prevOutput => prevOutput + userInput)
  }

  function calculateResult(){
    const result = eval(output)
    lastInput = result;
    setOutput(prevOutput => prevOutput + "=" + result)
  }

  return (
    <div id="calculator-container">
      <div id="display">{output}</div>
      <button onClick={clearOutput} id="clear">AC</button>
      <button className="operation-btn" id="divide" onClick={changeOutput}>/</button>
      <button className="operation-btn" id="multiply" onClick={changeOutput}>*</button>
      <button className="number-btn" id="seven" onClick={changeOutput}>7</button>
      <button className="number-btn" id="eight" onClick={changeOutput}>8</button>
      <button className="number-btn" id="nine" onClick={changeOutput}>9</button>
      <button className="operation-btn" id="subtract" onClick={changeOutput}>-</button>
      <button className="number-btn" id="four" onClick={changeOutput}>4</button>
      <button className="number-btn" id="five" onClick={changeOutput}>5</button>
      <button className="number-btn" id="six" onClick={changeOutput}>6</button>
      <button className="operation-btn" id="add" onClick={changeOutput}>+</button>
      <button className="number-btn" id="one" onClick={changeOutput}>1</button>
      <button className="number-btn" id="two"onClick={changeOutput}>2</button>
      <button className="number-btn" id="three"onClick={changeOutput}>3</button>
      <button className="operation-btn" id="equals" onClick={calculateResult}>=</button>
      <button className="number-btn" id="zero" onClick={changeOutput}>0</button>
      <button className="number-btn" id="decimal">.</button>
    </div>
  )
}

export default App
