import { useState, useEffect } from "react";
/**
 *
 * this any component function gets executed by react on every re-render
 * we MUST NOT exceute any =side-effect code in the body of the function
 * Side-effects: anything not directly related tio the render of JSX
 * examples:
 *  - setting intervals or tyimeouts
 *  - fetching data
 *  - reading/writing to localStorage
 *  - logging to the console etc
 *  - calling functions in the body of a component
 * NO/WITHOUT side-effect examples:
 *  - calling Hooks
 *  - declaring functions
 *  - if in doubt: don't do it
 * ANY side, if it's NOT a hook or function declaration
 * SHOULD be wrapped in useEffect
 * useEffect accepts two args:
 * 1. a function that wraps the side-effect code
 * 2. A dependency array that binds the useEffect to any items or props or state
 */
export default function SideEffect() {
  var [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    //your side-effect code goes HERE
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  // this effect runs ONCE on component mount
  useEffect(() => {
    document.title = `${time}`;
  }, [time]);
  // this effect runs on EVERY state change to time

  return (
    <>
      <h2>Side Effect</h2>
      <p>Current time: {time}</p>
    </>
  );
}
