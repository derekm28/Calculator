export default function Display(props) {
  console.log("displayValue", props.displayValue);

  return (
    <div>
      <div>{props.equation}</div>
      <div>{props.displayValue || '0'}</div>
    </div>
  );
}
