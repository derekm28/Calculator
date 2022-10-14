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
    }

    setDisplayValue(updatedDisplayValue);
  };

  return (
    <div>
      <Display displayValue={displayValue} />
      <Button
        color="dark grey"
        text="0"
        function={() => updateDisplayValue("0")}
      />
      <Button
        color="dark grey"
        text="1"
        function={() => updateDisplayValue("1")}
      />
      <Button
        color="dark grey"
        text="2"
        function={() => updateDisplayValue("2")}
      />
      <Button
        color="dark grey"
        text="3"
        function={() => updateDisplayValue("3")}
      />
      <Button
        color="dark grey"
        text="4"
        function={() => updateDisplayValue("4")}
      />
      <Button
        color="dark grey"
        text="5"
        function={() => updateDisplayValue("5")}
      />
      <Button
        color="dark grey"
        text="6"
        function={() => updateDisplayValue("6")}
      />
      <Button
        color="dark grey"
        text="7"
        function={() => updateDisplayValue("7")}
      />
      <Button
        color="dark grey"
        text="8"
        function={() => updateDisplayValue("8")}
      />
      <Button
        color="light grey"
        text="9"
        function={() => updateDisplayValue("9")}
      />
      <Button
        color="dark grey"
        text="+/−"
        function={() => updateDisplayValue("")}
      />
      {/* TODO: Update function prop for all orange buttons */}
      <Button color="orange" text="*" function={() => calculateResult("*")} />
      <Button color="orange" text="+" function={() => calculateResult("+")} />
      <Button color="orange" text="-" function={() => calculateResult("-")} />
      <Button color="orange" text="/" function={() => calculateResult("/")} />
      <Button color="orange" text="=" function={() => calculateResult("=")} />
    </div>
  );
}
