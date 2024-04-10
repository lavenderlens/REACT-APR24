import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Listing from "./components/Listing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Listing />
    </>
  );
}

export default App;
