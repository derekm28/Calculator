import Display from "./display";
import Button from "./button";

export default function Calculator() {
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
