import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ShoppingList() {
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) ?? []
  ); //initial state could be anything

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]); //dependency array as second arg to useEffect
  /**
   * useEffect wraps anything outside of React
   * the useEffect dependency array is used to monitor and control
   * ANYTHING that happens AFTER React has rendered
   * an empty dep array means useEffect runs ONCE,
   * when the component is mounted
   * we may add props OR state to the dep array
   * then React will run the useEffect WHENEVER the props or state update
   */

  return (
    <>
      <h3>Shopping List</h3>
      {/* <button onClick={() => setItems(items.push("Coffee"))}>Coffee</button> */}
      {/* Uncaught TypeError: items.push is not a function */}
      {/* we cannot modify state directly even inside the call to the setter */}
      {/* items is react state, NOT an array */}
      <button onClick={() => setItems([...items, "Coffee"])}>Coffee</button>
      {/* the spread operator spreads n number of items into a new array */}
      {/* then we add a new item */}
      <button onClick={() => setItems([...items, "Bread"])}>Bread</button>
      <button onClick={() => setItems([...items, "Milk"])}>Milk</button>
      <p></p>
      <button onClick={() => setItems([])}>Reset</button>

      <section>
        {items.map((item) => (
          <p key={uuidv4()}>{item}</p>
        ))}
      </section>
    </>
  );
}
