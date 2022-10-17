import { useState } from "react";
import { division, addition, subtraction, multiply } from "../helpers/math";
import Display from "./display";
import Button from "./button";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(displayValue);
  // TODO: add state for previous value

  const calculateResult = (symbol) => {
    let tempResult = displayValue;

    // calculate result of prevValue and action
    switch (symbol) {
      case "/":
        tempResult = division(previousValue, parseFloat(displayValue));
        break;

      case "*":
        tempResult = multiply(previousValue, parseFloat(displayValue));
        break;

      case "+":
        tempResult = addition(previousValue, parseFloat(displayValue));
        break;

      case "-":
        tempResult = subtraction(previousValue, parseFloat(displayValue));
        break;

      case "=":
        break;

      default:
        // do nothing
        break;
    }

    setDisplayValue(tempResult);
    setPreviousValue(tempResult);
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
    }

    setDisplayValue(updatedDisplayValue);
  };

  return (
    <div>
      <Display displayValue="10" />
      <Button color="dark grey" text="5" />

      {/* props needed: */}
      {/* - displayValue (string) */}
      {/* - background color (string) */}
      {/* - onClick (function) */}
      {/* <Button /> */}
    </div>
  );
}
