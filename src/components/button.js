import {
  addition,
  subtraction,
  multiply,
  division,
  percentage,
} from "../helpers/math";

export default function Button(props) {
  //should return a circle with text in it
  return (
    <div className={props.className}>
      <button onClick={props.function} color={props.color}>
        {props.text}
      </button>
    </div>
  );
}
