import { useState } from "react";
import { division, addition, subtraction, multiply } from "../helpers/math";
import Display from "./display";
import Button from "./button";
import "./calculator.css";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(displayValue);
  const buttonData = [
    {value : "AC", type : "symbol"},
    {value : "+/-", type : "symbol"},
    {value : "%", type : "symbol"},
    {value : "/", type : "symbol"},
    {value : "7", type : "symbol"},
    {value : "8", type : "symbol"},
    {value : "9", type : "symbol"},
    {value : "*", type : "symbol"},
    {value : "4", type : "symbol"},
    {value : "5", type : "number"},
    {value : "6", type : "number"},
    {value : "-", type : "number"},
    {value : "1", type : "number"},
    {value : "2", type : "number"},
    {value : "3", type : "number"},
    {value : "+", type : "number"},
    {value : "0", type : "number"},
    {value : ".", type : "number"},
    {value : "=", type : "number"}
  ];
  // TODO: add state for previous value

  const calculateResult = (symbol) => {
    let tempResult = displayValue;

    // calculate result of prevValue and action
    // TODO: add missing cases
    switch (symbol) {
      case "/":
        tempResult = division(previousValue, parseFloat(displayValue));
        setDisplayValue(tempResult);
        setPreviousValue(tempResult);
        break;

      case "*":
        tempResult = multiply(previousValue, parseFloat(displayValue));
        setDisplayValue(tempResult);
        setPreviousValue(tempResult);
        break;

      case "+":
        tempResult = addition(previousValue, parseFloat(displayValue));
        setDisplayValue(tempResult);
        setPreviousValue(tempResult);
        break;

      case "-":
        tempResult = subtraction(previousValue, parseFloat(displayValue));
        setDisplayValue(tempResult);
        setPreviousValue(tempResult);
        break;

      case "=":
        setDisplayValue(tempResult);
        setPreviousValue(tempResult);
        break;

      default:
        // do nothing
        break;
    }

    // TODO: save tempResult
    // TODO: store result as new prevValue
    // TODO: store result as new displayValue
  };

  const updateDisplayValue = (inputValue) => {
    let updatedDisplayValue = displayValue;

    switch (inputValue) {
      case ".":
        if (displayValue.includes(".")) {
          // do nothing
        } else {
          updatedDisplayValue += inputValue;
        }
        break;

      case "clear":
        if ((<Button text="AC" />)) {
          updatedDisplayValue = "0";
        } else {
        }
        break;

      case "0":
        if (inputValue === "0") {
          updatedDisplayValue += inputValue;
        }
        break;

      case "1":
        if (inputValue === "1") {
          updatedDisplayValue += "1";
        }
        break;

      case "2":
        if (inputValue === "2") {
          updatedDisplayValue += "2";
        }
        break;

      case "3":
        if (inputValue === "3") {
          updatedDisplayValue += "3";
        }
        break;

      case "4":
        if (inputValue === "4") {
          updatedDisplayValue += "4";
        }
        break;

      case "5":
        if (inputValue === "5") {
          updatedDisplayValue += "5";
        }
        break;

      case "6":
        if (inputValue === "6") {
          updatedDisplayValue += "6";
        }
        break;

      case "7":
        if (inputValue === "7") {
          updatedDisplayValue += "7";
        }
        break;

      case "8":
        if (inputValue === "8") {
          updatedDisplayValue += "8";
        }
        break;

      case "9":
        if (inputValue === "9") {
          updatedDisplayValue += "9";
        }
        break;

      default:
        console.log("Error, should not reach default");
    }

    setDisplayValue(updatedDisplayValue);
  };

  return (
    <div className="calculatorContainer">
      <div className="displayContainer">
      <Display displayValue={displayValue}/>
      </div>
      <div className="grid-container">
      {buttonData.map((button, i) => (
        <Button
          key={`button-${i}`}
          type="button"
          className={ `${button.type === "number" ? "numbers" : "symbols"} grid-item ${button.value === "0" ?  "twoItemButton" : ""}`}
          text={button.value}
          function={button.type === "number" ? () => updateDisplayValue(button.value) : () => calculateResult(button.value)}
        />
      ))}
      </div>
    </div>
  );
}
