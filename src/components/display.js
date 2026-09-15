export default function Display(props) {
  console.log("displayValue", props.displayValue);

  return (
    <div>
      <div className="equation">{props.equation}</div>
      <div className="result">{props.displayValue || '0'}</div>
    </div>
  );
}
