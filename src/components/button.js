import addition from "./buttonFunctions/addition";
import subtraction from "./buttonFunctions/subtraction";
import division from "./buttonFunctions/division";
import multiply from "./buttonFunctions/multiplication";

export default function Button(props) {

  //should return a circle with text in it
  return <div className="Button">
    <Button onClick={props.function}
    color={props.color}
  >
    {props.text}
  </Button>
  </div>;
}
