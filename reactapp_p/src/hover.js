import UpdatedComponent from "./withcounter.js";
import { useState } from "react";
function HoverIncrease(props) {
  const [fontSize, setFontSize] = useState(10);
  const { counter, incrementCounter } = props;
  return (
    <div>
      {/* <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on hover
      </button>
      <p style={{ fontSize }}>
        Size of font in onMouseOver function: {fontSize}
      </p> */}
      <button onMouseOver={() => incrementCounter()}>Increment counter</button>
      <p> Value of 'counter' in HoverIncrease: {counter}</p>
    </div>
  );
}

export default UpdatedComponent(HoverIncrease);
