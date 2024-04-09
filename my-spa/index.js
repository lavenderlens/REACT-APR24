console.log("index.js loaded");
// get a ref to root div
var root = document.querySelector("#root");

root.innerHTML = "<h1>My SPA</h1>";
// magic strings are fragile in an app
// this is just the sort of thing that later,
// JSX helps us avoid!

var h2 = document.createElement("h2"); //leveraged by React.createElement
// element cretaed but not mounted in the page
h2.innerText = "My sub-heading created by JS";
root.appendChild(h2);

// the h2 way is better than the h1 as no magic strings!

//data
var delegates = ["Dan", "Alan", "Fred", "Frida"];

// render the data dynamically as unordered list
var delegateList = document.createElement("ul");

// use a for loop to populate list items:
// for (var delegate of delegates) {
//   var listItem = document.createElement("li");
//   listItem.innerText = delegate;
//   delegateList.appendChild(listItem);
// }

// you cannot use loops or if statements in JSX
// a more React-y way of iterating around a list and returning something different is
// Array.prototype.map()
// this map function works the same as forEach()
// but always returns a new array
// so map treats the original array as immutable
// delegates.map(function (delegate) {
//   var listItem = document.createElement("li");
//   listItem.innerText = delegate;
//   delegateList.appendChild(listItem);
// });
delegates.map((delegate) => {
  var listItem = document.createElement("li");
  listItem.innerText = delegate;
  delegateList.appendChild(listItem);
});
root.appendChild(delegateList);
