import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import { create, all } from 'mathjs';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import React from 'react';
import ButtonRow from './components/ButtonRow/ButtonRow';

type Operator = "+" | "-" | "*" | "/"

const math = create(all);

const App = () => {
  const [inputText, setInputText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [operators, setOperators] = useState<Operator[]>([]);

  const updateInputValue = (value: string) => {
    setInputValue(inputValue + value)
    setInputText(inputText + value)
  }

  const addNumberAndOperator = (number: string, operator: Operator) => {
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

  const addOperator = (operator: Operator) => {
    let updatedOperators = operators
    updatedOperators.push(operator)
    setOperators(updatedOperators)
  }

  const addNumber = (number: string) => {
    let updatedNumbers = numbers
    updatedNumbers.push(formatNumber(number))
    setNumbers(updatedNumbers)
  }

  const formatNumber = (number: string) => {
    if (number.toString().includes(".")) {
      return parseFloat(number)
    }
    return parseInt(number)
  }

  const calculate = () => {
    addNumber(inputValue);

    const expressionArray: (number | Operator)[] = [];
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
      setInputText(result.toString());
    } catch (error) {
      console.error('Error evaluating expression:', error);
    }
  }

  const clear = () => {
    setInputText("")
    setInputValue("")
    setNumbers([])
    setOperators([])
  }

  return (
    <>
      <div className="toolbar">
        <ToggleTheme />
      </div>
      <div className="expression_div" data-testid="expression_div">
        {inputText}
      </div>
      <div className="flex">
        <Button label="C" onClick={() => clear()} extraClass="bg-red-300 dark:bg-red-700" />
        <div className="result_div" data-testid="result_div">{inputValue}</div>
      </div>
      <ButtonRow buttons={[
        { label: "7", action: () => updateInputValue("7") },
        { label: "8", action: () => updateInputValue("8") },
        { label: "9", action: () => updateInputValue("9") },
        { label: "×", action: () => addNumberAndOperator(inputValue, "*") },
      ]} />
      <ButtonRow buttons={[
        { label: "4", action: () => updateInputValue("4") },
        { label: "5", action: () => updateInputValue("5") },
        { label: "6", action: () => updateInputValue("6") },
        { label: "−", action: () => addNumberAndOperator(inputValue, "-") },
      ]} />
      <ButtonRow buttons={[
        { label: "1", action: () => updateInputValue("1") },
        { label: "2", action: () => updateInputValue("2") },
        { label: "3", action: () => updateInputValue("3") },
        { label: "+", action: () => addNumberAndOperator(inputValue, "+") },
      ]} />
      <ButtonRow buttons={[
        { label: ".", action: () => updateInputValue(".") },
        { label: "0", action: () => updateInputValue("0") },
        { label: "=", action: () => calculate() },
        { label: "÷", action: () => addNumberAndOperator(inputValue, "/") },
      ]} />
    </>
  )
}

export default App;
