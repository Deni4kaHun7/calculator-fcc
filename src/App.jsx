import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [output, setOutput] = useState('0')

  function clearOutput() {
    setOutput('0');
  }

  function addNumberToOutput(event){
    const userInput = event.target.textContent;  
    
    const arrayOutput = output.split('');
    console.log(arrayOutput[0][length - 1])
    if(output === '0'){
      setOutput(userInput)
      //forbid to add zeroes to a number beginning with zero
    } else if(arrayOutput[arrayOutput.length-1].includes('.') && userInput === '0' && !isNaN(arrayOutput[0][length - 1])){
      console.log(arrayOutput)
        return;
    } else if(arrayOutput[arrayOutput.length-1].length === 0 && userInput === '0'){
      console.log("fsfx1")
      return;
    }
    else {
      setOutput(prevOutput => prevOutput + userInput)
    }
  }

  function addOperationToOutput(event){
    const userInput = event.target.textContent; 
    setOutput(prevOutput => prevOutput + ' ' + userInput + ' ')
  }

  function addDecimalToOutput(){
    const arrayOutput = output.split(' ');
    console.log(arrayOutput)
    const lastElement = arrayOutput[arrayOutput.length-1]
    console.log(arrayOutput)
    if(lastElement === "0"){
      
      return;
    }else if(!lastElement.includes('.') && !isNaN(parseInt(lastElement))){
      setOutput(prevOutput => prevOutput + '.')
    }
  }

  function calculateResult(){
    
    const arrayOutput = output.split(' ');
    //console.log(arrayOutput)
    const newArray = [];
    let isLastCharExp = false;
    let lastCharExp = '';
    let isCurrentCharExp = false;
    let isLastCharNum = false;
    let isCurrentCharNum = false;
    const regex1 = /[+\-*/]/
    const regex2 = /[0-9]/;
    const regex3 = /[+*/]/
    //check if last char is operation
    for(let i = arrayOutput.length - 1; i >= 0 ;i--){
      isCurrentCharExp = regex1.test(arrayOutput[i])
      isCurrentCharNum = regex2.test(arrayOutput[i])
      
      console.log("Current char exp " +isCurrentCharExp)
      console.log("isCurrentCharNum " +isCurrentCharNum)
      console.log("lastCharExp " +lastCharExp)
      
      if (isLastCharExp && isCurrentCharExp){
        if(lastCharExp === '-'){
          lastCharExp = arrayOutput[i]
        }else{
          arrayOutput.splice(i, 1);
        }
      } else if(isCurrentCharExp){
        lastCharExp = arrayOutput[i]
        isLastCharExp = true;
      }else if(isCurrentCharNum){
        isLastCharExp = false;
        lastCharExp = arrayOutput[i]
      }
      console.log(arrayOutput)
    }
    //console.log(arrayOutput)
    /*
    for(let i = arrayOutput.length - 1; i >= 0 ;i--){
      
      isCurrentCharExp = regex3.test(arrayOutput[i])
      console.log(isCurrentCharNum)
      if (isLastCharNum && isCurrentCharExp){
        arrayOutput.splice(i, 1);
      } else if(isCurrentCharNum){
        isLastCharNum = true;
      }
    }*/

    console.log(arrayOutput)
    let result = eval(arrayOutput.join(''));
    const resultToString = result.toString();
    if(resultToString.includes(".")){
      const checkForDecimalPlaces = resultToString.split('.')
      if(checkForDecimalPlaces[1].length > 4){
        result = Number(result.toFixed(4));
      }
    }
    result = result.toString()
    setOutput(result) 
  }
 
  return (
    <div id="calculator-container">
      <div id="display">{output}</div>
      <button onClick={clearOutput} id="clear">AC</button>
      <button className="operation-btn" id="divide" onClick={addOperationToOutput}>/</button>
      <button className="operation-btn" id="multiply" onClick={addOperationToOutput}>*</button>
      <button className="number-btn" id="seven" onClick={addNumberToOutput}>7</button>
      <button className="number-btn" id="eight" onClick={addNumberToOutput}>8</button>
      <button className="number-btn" id="nine" onClick={addNumberToOutput}>9</button>
      <button className="operation-btn" id="subtract" onClick={addOperationToOutput}>-</button>
      <button className="number-btn" id="four" onClick={addNumberToOutput}>4</button>
      <button className="number-btn" id="five" onClick={addNumberToOutput}>5</button>
      <button className="number-btn" id="six" onClick={addNumberToOutput}>6</button>
      <button className="operation-btn" id="add" onClick={addOperationToOutput}>+</button>
      <button className="number-btn" id="one" onClick={addNumberToOutput}>1</button>
      <button className="number-btn" id="two"onClick={addNumberToOutput}>2</button>
      <button className="number-btn" id="three"onClick={addNumberToOutput}>3</button>
      <button className="operation-btn" id="equals" onClick={calculateResult}>=</button>
      <button className="number-btn" id="zero" onClick={addNumberToOutput}>0</button>
      <button className="number-btn" id="decimal" onClick={addDecimalToOutput}>.</button>
    </div>
  )
}

export default App
