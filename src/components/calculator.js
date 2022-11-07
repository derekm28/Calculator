import { useState } from "react";
import { division, addition, subtraction, multiply } from "../helpers/math";
import Display from "./display";
import Button from "./button";
import "./calculator.css";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(displayValue);
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const symbols = ["+", "-", "*", "/", "=", "AC", "+/−"];
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
      <Display displayValue={displayValue} />
      {numbers.map((number, i) => (
        <Button
          key={`number-${i}`}
          type="button"
          className="numbers"
          color={"dark grey"}
          text={number}
          function={() => updateDisplayValue(number)}
        />
      ))}

      {symbols.map((symbol, i) => (
        <Button
          key={`symbol-${i}`}
          type="button"
          className="symbols"
          color={"orange"}
          text={symbol}
          function={() => calculateResult(symbol)}
        />
      ))}
    </div>
  );
}
