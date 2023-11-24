import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [numbers, setNumbers] = useState([])
  const [operators, setOperators] = useState([])

  function updateInputValue(value) {
    setInputValue(inputValue + value)
  }

  function addNumberAndOperator(number, operator) {
    addNumber(number)
    addOperator(operator)
    setInputValue("")
  }

  function addOperator(operator) {
    let updatedOperators = operators
    updatedOperators.push(operator)
    setOperators(updatedOperators)
  }

  function addNumber(number) {
    let updatedNumbers = numbers
    updatedNumbers.push(formatNumber(number))
    setNumbers(updatedNumbers)
  }

  function formatNumber(number) {
    if (number.toString().includes(".")) {
      return parseFloat(number)
    }
    return parseInt(number)
  }

  function calculate() {
    addNumber(inputValue)
    
    if (operators.length > 0) {
      let result = numbers[0];

      for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = formatNumber(numbers[i + 1]);

        switch (operator) {
          case "+":
            result += nextNumber;
            break;
          case "-":
            result -= nextNumber;
            break;
          case "*":
            result *= nextNumber;
            break;
          case "/":
            result /= nextNumber;
            break;
          default:
            throw new Error(`Invalid operator: ${operator}`);
        }
      }

      clear()
      setInputValue(result.toString())
    }
  }

  function clear() {
    setInputValue("")
    setNumbers([])
    setOperators([])
  }

  return (
    <>
      <div className="flex">
        <Button label="C" onClick={() => clear()} />
        <div className="w-9/12">{inputValue}</div>
      </div>
      <div className="flex">
        <Button label="7" onClick={() => updateInputValue("7")} />
        <Button label="8" onClick={() => updateInputValue("8")} />
        <Button label="9" onClick={() => updateInputValue("9")} />
        <Button label="x" onClick={() => addNumberAndOperator(inputValue, "*")} />
      </div>
      <div className="flex">
        <Button label="4" onClick={() => updateInputValue("4")} />
        <Button label="5" onClick={() => updateInputValue("5")} />
        <Button label="6" onClick={() => updateInputValue("6")} />
        <Button label="-" onClick={() => addNumberAndOperator(inputValue, "-")} />
      </div>
      <div className="flex">
        <Button label="1" onClick={() => updateInputValue("1")} />
        <Button label="2" onClick={() => updateInputValue("2")} />
        <Button label="3" onClick={() => updateInputValue("3")} />
        <Button label="+" onClick={() => addNumberAndOperator(inputValue, "+")} />
      </div>
      <div className="flex">
        <Button label="." onClick={() => updateInputValue(".")} />
        <Button label="0" onClick={() => updateInputValue("0")} />
        <Button label="=" onClick={() => calculate()} />
        <Button label="/" onClick={() => addNumberAndOperator(inputValue, "/")} />
      </div>
    </>
  )
}

export default App
