import "./App.css";
import Form from "./components/Form";
import { Jsx } from "./components/Jsx";
import Listing from "./components/Listing";
import Navbar from "./components/Navbar";
import Props from "./components/Props";
import ShoppingList from "./components/ShoppingList";
import SideEffect from "./components/SideEffect";
import State from "./components/State";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// normal JS
function App() {
  // normal JS
  var hello = "Hello";
  var farewell = "Goodbye";
  var message = "Passed through Props component";
  return (
    <>
      <BrowserRouter>
        {/* A JSX comment */}
        <h1>My React App</h1>
        <Navbar />
        {/* <Jsx>TODO: React.children</Jsx> */}
        {/* <Jsx>TODO: React.children</Jsx> */}
        {/* <Props greeting={hello} farewell={farewell} message={message} /> */}
        {/* <State /> */}
        {/* <SideEffect /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Welcome to my react app.</h2>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi distinctio explicabo laboriosam, neque temporibus
                  asperiores suscipit fugit voluptas sequi optio expedita hic
                  odit nemo molestias quam quo illum quas assumenda."
                </p>
              </>
            }
          ></Route>
          <Route path="listings" element={<Listing />} />
          <Route path="shopping-list" element={<ShoppingList />} />
          <Route path="contact-us" element={<Form title="Login Form" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
