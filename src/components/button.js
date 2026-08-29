import "./button.css";

export default function Button(props) {
  //should return a circle with text in it
  return (
    <div>
      <button
        onClick={props.function}
        className={props.className}>
        {props.text}
      </button>
    </div>
  );
}
