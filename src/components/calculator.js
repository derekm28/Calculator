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
        break;

      default:
        break;
    }

    setDisplayValue(updatedDisplayValue);
  };

  return (
    <div>
      <Display displayValue={displayValue} />
      {/* TODO: Add remaining buttons */}
      <Button
        color="dark grey"
        text="AC"
        function={() => updateDisplayValue("5")}
      />
      <Button
        color="dark grey"
        text="5"
        function={() => updateDisplayValue("4")}
      />
      <Button
        color="dark grey"
        text="+/−"
        function={() => updateDisplayValue("")}
      />
    </div>
  );
}
