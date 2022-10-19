import { useState } from "react";
import { division, addition, subtraction, multiply } from "../helpers/math";
import Display from "./display";
import Button from "./button";

export default function Calculator() {
  const [mathSymbol, setMathSymbol] = useState(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(displayValue);

  const calculateResult = () => {
    let tempResult = displayValue;

    // calculate result of prevValue and action
    switch (mathSymbol) {
      case "/":
        tempResult = division(previousValue, displayValue);
        break;

      case "*":
        tempResult = multiply(previousValue, displayValue);
        break;

      case "+":
        tempResult = addition(previousValue, displayValue);
        break;

      case "-":
        tempResult = subtraction(previousValue, displayValue);
        break;

      default:
        // do nothing
        break;
    }

    setDisplayValue(tempResult);
    setPreviousValue(tempResult);
    //
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

      case "+/-":
        updatedDisplayValue *= -1;
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

    setDisplayValue(parseFloat(updatedDisplayValue));
  };

  const handleSymbolPress = (symbol) => {
    // set math symbol
    setMathSymbol(symbol);
    // set previous value
    setPreviousValue(displayValue);
    // clear the display
    setDisplayValue(0);
  };

  return (
    <div>
      <Display displayValue={displayValue} />
      <Button
        color="dark grey"
        text="AC"
        function={() => updateDisplayValue("clear")}
      />
      <Button
        color="dark grey"
        text="."
        function={() => updateDisplayValue(".")}
      />
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
        text="+/-"
        function={() => updateDisplayValue("+/-")}
      />
      <Button color="orange" text="*" function={() => handleSymbolPress("*")} />
      <Button color="orange" text="+" function={() => handleSymbolPress("+")} />
      <Button color="orange" text="-" function={() => handleSymbolPress("-")} />
      <Button color="orange" text="/" function={() => handleSymbolPress("/")} />

      <Button
        color="orange"
        text="="
        function={() => calculateResult(mathSymbol)}
      />
      <p>{`mathSymbol: ${mathSymbol}`}</p>
      <p>{`previousValue: ${previousValue}`}</p>
    </div>
  );
}
