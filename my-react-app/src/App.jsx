import "./App.css";
import Form from "./components/Form";
import { Jsx } from "./components/Jsx";
import Listing from "./components/Listing";
import Props from "./components/Props";
import ShoppingList from "./components/ShoppingList";
import SideEffect from "./components/SideEffect";
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
      {/* <State /> */}
      {/* <ShoppingList /> */}
      {/* <SideEffect /> */}
      <Form title="Login Form" />
    </>
  );
}

export default App;
