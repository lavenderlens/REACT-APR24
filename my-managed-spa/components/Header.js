export function Header(level, text) {
  var header = document.createElement(`h${level}`);
  header.innerText = text;
  //   h2.innerText = "My sub-heading created by JS";
  // keep the component generic - to accept different props
  //   app.appendChild(h2);
  // keep the component away from how/where it is used
  return header;
}
