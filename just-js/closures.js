/**
 * a closure is a function with a reference to one or more lexically-scoped variables
 * a variable's lexical scope is it's immediate parent function environment
 *
 * a candidate function for a closure returns ANOTHER FUNCTIO,
 * NOT a value or expression
 * crucially, it will hold its value between repeated invocations of the function that has been returned
 */

// part 1 make a function declaration
// - with at least one function-scoped variable
// - that returns an inner function

function getNextNumber() {
  //loaded into memory at the start - position in script not important
  // const getNextNumber = () =>{//alternative - MUST come before its used in script
  // lexically-scoped variable
  var nextNumber = 1;
  return function () {
    return (nextNumber = nextNumber + 1);
  };
}

// part 2 make a function expression from the first function and call it
const getNext1 = getNextNumber();
console.log(getNext1()); //2
console.log(getNext1()); //3
console.log(getNext1()); //4

const getNext2 = getNextNumber();
console.log(getNext2()); //2
console.log(getNext2()); //3
console.log(getNext2()); //4

/**
 * React leverages JS closures in its Hooks -
 * Hooks add state to functional components
 * the first one of tehses we learn is useState()
 *
 * a useState Hook has two parts
 * the initial state,
 * and the function to change that state.
 * State MUST NOT BE MODIFIED DIRECTLY, but only through useState()
 *
 * The tow parts are declaerd in an array destructuring assignment
 * because WE know, that REACT KNOWS, that's the way the Hook is made up
 *
 * const [state, setState] = useState("");//initial state string
 * const [counter, setCounter] = useState(0);//initial state number
 * we may to some extent backwards-engineer this in just JS:
 */

function myUseState(initValue) {
  var state = { value: initValue };
  return [
    state,
    function (newValue) {
      state.value = newValue;
    },
  ];
}

const arrayState = myUseState(0);
const thing = arrayState[0];
const setThing = arrayState[1];
console.log(thing.value);
setThing((thing.value += 1));
console.log(thing.value);

// typically we declare the useState hool by array destructuring
const [myState, setMyState] = myUseState("apple juice");
setMyState("freshly squeezed " + myState.value);
console.log(myState); //new state

// storing data as JSON strings/objects

const my_obj = { name: "Alan", age: 57, hobbies: ["Netflix", "restaurants"] };

const my_json = JSON.stringify(my_obj);
console.log(my_json);

const my_people = { people: [] };

my_people.people.push(my_obj);

const my_people_json = JSON.stringify(my_people);
console.log(my_people_json);
//{"people":[{"name":"Alan","age":57,"hobbies":["Netflix","restaurants"]}]}

const my_people_json_parsed = JSON.parse(my_people_json);
for (let person of my_people_json_parsed.people) {
  console.log(person);
}
