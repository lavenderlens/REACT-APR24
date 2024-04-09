export function DelegateForm(handleAddDelegate) {
  var section = document.createElement("section");
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  section.appendChild(input);
  var button = document.createElement("button");
  button.innerText = "Add Delegate";
  button.onclick = function () {
    var delegate = input.value;
    handleAddDelegate(delegate);
  };
  section.appendChild(button);

  return section;
}
