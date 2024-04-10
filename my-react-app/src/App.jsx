import "./App.css";
import { Jsx } from "./components/Jsx";
import Listing from "./components/Listing";
import Props from "./components/Props";
import State from "./components/State";
// normal JS
function App() {
  // normal JS
  var hello = "Hello";
  var farewell = "Goodbye";
  var message = "Passed through Props component";
  return (
    <>
      {/* A JSX comment */}
      <h1>My React App</h1>
      {/* <Jsx>TODO: React.children</Jsx> */}
      {/* <Jsx>TODO: React.children</Jsx> */}
      {/* <Props greeting={hello} farewell={farewell} message={message} /> */}
      {/* <Listing /> */}
      <State />
    </>
  );
}

export default App;
