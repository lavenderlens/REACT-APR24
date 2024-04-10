import { useState } from "react";

export default function State() {
  let [counter, setCounter] = useState(99); //initial state could be anything
  // let counter = 1;
  //   function incrementCounter() {
  //     // devs very tempted to do this:
  //     // counter = counter + 1;
  //     // you MUST call the setter of the useState hook!
  //     setCounter(counter + 1);
  //     console.log("I was clicked");
  //   }
  //OR

  return (
    <>
      <h3>State</h3>
      <p>Counter: {counter}</p>
      {/* <button onClick={incrementCounter}>Increment Counter</button> */}
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </>
  );
}
