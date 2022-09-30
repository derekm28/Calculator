import { useState } from "react";

import Display from "./display";
import Button from "./button";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState(0);

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

        {
          /* TODO: Add remaining cases */
        }
      case "clear":
        if(<Button text = "AC"/>){
          updateDisplayValue = 0;
        }
        else {

        }
        break;


      case "%":
        if(<Button text = "%" />){
          updateDisplayValue = /** ??? */0;
        }
        break;

      case "/":
        if(<Button text = "/" />){

        }
        break;

      case "*":
          if(<Button text = "*" />){

          }
          break;

      case "+":
            if(<Button text = "+" />){

            }
            break;

      case "-":
        if(<Button text = "-" />){

        }
        break;

        case "0":
          if(inputValue === "0"){
            updatedDisplayValue += inputValue;
          }
          break;

          case "1":
        if(inputValue === "1"){
          updateDisplayValue = 1;
        }
        break;

        case "2":
        if(inputValue === "2"){
          updateDisplayValue = 2;
        }
        break;

        case "3":
        if(inputValue === "3"){
          updateDisplayValue = 3;
        }
        break;

        case "4":
        if(inputValue === "4"){
          updateDisplayValue = 4;
        }
        break;

        case "5":
        if(inputValue === "5"){
          updateDisplayValue = 5;
        }
        break;

        case "6":
        if(inputValue === "6"){
          updateDisplayValue = 6;
        }
        break;

        case "7":
        if(inputValue === "7"){
          updateDisplayValue = 7;
        }
        break;

        case "8":
        if(inputValue === "8">){
          updateDisplayValue = 8;
        }
        break;

        case "9":
        if(inputValue === "9"){
          updateDisplayValue = 9;
        }
        break;



        default:

    }

    setDisplayValue(updatedDisplayValue);
  };

  return (
    <div>
      <Display displayValue={displayValue} />
      {/* TODO: Add remaining buttons */}
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
      <Button
        color="orange"
        text="*"
        function={(multiply) => updateDisplayValue("0")}
      />
      <Button
        color="orange"
        text="+"
        function={(addition) => updateDisplayValue("0")}
      />
      <Button
        color="orange"
        text="-"
        function={(subtraction) => updateDisplayValue("0")}
      />
      <Button
        color="orange"
        text="/"
        function={(division) => updateDisplayValue("0")}
      />
      <Button
        color="orange"
        text="="
        function={(equals) => updateDisplayValue("0")}
      />
    </div>
  );
}
