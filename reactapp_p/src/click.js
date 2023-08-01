import UpdatedComponent from "./withcounter.js";
import { useState } from "react";
function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  const { counter, incrementCounter } = props;
  return (
    <div>
      {/* <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p> */}

      <button onClick={() => incrementCounter()}>Increment counter</button>

      <p> Value of 'counter' in ClickIncrease: {counter}</p>
    </div>
  );
}
export default UpdatedComponent(ClickIncrease);
