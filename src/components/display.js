export default function Display(props) {
  console.log("displayValue", props.displayValue);

  return <div>{props.displayValue || "0"}</div>;
}
