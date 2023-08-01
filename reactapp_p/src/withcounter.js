import React from "react";
import { useState } from "react";
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10);
    return <OriginalComponent
    counter={counter}
    incrementCounter={() => setCounter((counter) => counter + 1)}
    />;
  }
  return NewComponent;
};
export default UpdatedComponent;