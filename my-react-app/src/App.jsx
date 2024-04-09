import "./App.css";
import { Jsx } from "./components/Jsx";
import Props from "./components/Props";
// normal JS
function App() {
  // normal JS
  var hello = "Hello";
  var farewell = "Goodbye";
  return (
    <>
      {/* A JSX comment */}
      <h1>My React App</h1>
      {/* <Jsx>TODO: React.children</Jsx> */}
      <Props greeting={hello} farewell={farewell} />
    </>
  );
}

export default App;
