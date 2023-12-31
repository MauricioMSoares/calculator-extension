import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { create, all } from 'mathjs';

const math = create(all);

function App() {
  const [inputText, setInputText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [operators, setOperators] = useState([]);

  function updateInputValue(value) {
    setInputValue(inputValue + value)
    setInputText(inputText + value)
  }

  function addNumberAndOperator(number, operator) {
    addNumber(number)
    addOperator(operator)
    setInputValue("")
    setInputText(
      String(`
        ${inputText} 
        ${operator == "-" ? "−" :
          operator == "/" ? "÷" :
            operator == "*" ? "×" :
              operator
        } 
        `)
    )
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
    addNumber(inputValue);

    const expressionArray = [];
    for (let i = 0; i < operators.length; i++) {
      expressionArray.push(numbers[i], operators[i]);
    }
    expressionArray.push(numbers[numbers.length - 1]);

    const expression = expressionArray.join(' ');
    console.log('Expression:', expression);

    try {
      const result = math.evaluate(expression);
      clear();
      setInputValue(result.toString());
    } catch (error) {
      console.error('Error evaluating expression:', error);
    }
  }

  function clear() {
    setInputText("")
    setInputValue("")
    setNumbers([])
    setOperators([])
  }

  return (
    <>
      <div className="expression_div" data-testid="expression_div">
        {inputText}
      </div>
      <div className="flex">
        <Button label="C" onClick={() => clear()} extraClass="bg-red-300" />
        <div className="result_div" data-testid="result_div">{inputValue}</div>
      </div>
      <div className="flex">
        <Button label="7" onClick={() => updateInputValue("7")} />
        <Button label="8" onClick={() => updateInputValue("8")} />
        <Button label="9" onClick={() => updateInputValue("9")} />
        <Button label="×" onClick={() => addNumberAndOperator(inputValue, "*")} />
      </div>
      <div className="flex">
        <Button label="4" onClick={() => updateInputValue("4")} />
        <Button label="5" onClick={() => updateInputValue("5")} />
        <Button label="6" onClick={() => updateInputValue("6")} />
        <Button label="−" onClick={() => addNumberAndOperator(inputValue, "-")} />
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
        <Button label="÷" onClick={() => addNumberAndOperator(inputValue, "/")} />
      </div>
    </>
  )
}

export default App;
