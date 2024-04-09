import { DelegateForm } from "./components/DelegateForm";
import { DelegateList } from "./components/DelegateList";
import { Header } from "./components/Header";
import "./style.css";

var app = document.querySelector("#app");
console.log("index.js loaded");

app.innerHTML = "<h1>My SPA</h1>";

// var h2 = document.createElement("h2"); //leveraged by React.createElement
// h2.innerText = "My sub-heading created by JS";
// app.appendChild(h2);
// refactored to a generic function
// that just returns an element
// doesn't say what or where we sgould do wiith it
app.appendChild(Header(2, "Sub-heading created by a function"));

//data
var delegates = ["Dan", "Alan", "Fred", "Frida"];
var existingDelegateList = DelegateList(delegates);
app.appendChild(existingDelegateList);

function handleAddDelegate(delegate) {
  delegates.push(delegate);
  // get the render to update from here
  app.removeChild(existingDelegateList);
  existingDelegateList = DelegateList(delegates);
  // list updated
  app.appendChild(existingDelegateList);
  console.log(delegates);
}
// new delegates are not rendered
handleAddDelegate("Brendan E");

app.appendChild(DelegateForm(handleAddDelegate));

// var courses = ["React", "Java", "Python"];
// app.appendChild(DelegateList(courses));
