export function DelegateList(delegates) {
  var delegateList = document.createElement("ul");
  delegates.map((delegate) => {
    var listItem = document.createElement("li");
    listItem.innerText = delegate;
    delegateList.appendChild(listItem);
  });
  return delegateList;
}
// this component is DUMB - it just renders the data passed to it
