import { addition, subtraction, multiply, division } from "../helpers/math";

export default function Button(props) {
  //should return a circle with text in it
  return (
    <div className="Button">
      <Button onClick={props.function} color={props.color}>
        {props.text}
      </Button>
    </div>
  );
}
