/**
 * two types of destructuring: object and array.
 * They both depend on the developer having inside information
 * on the structure of their objects and arrays
 */

var nums = [1, 2, 3, 4];
// OLD SCHOOL (PRE-ES6)
var one = nums[0];
var two = nums[1];
var three = nums[2];
var four = nums[3];

// DESTRUCTURING - ES6>
// indices must be known

var [num1, num2, num3, num4] = nums;
console.log(num1, num4);
var [first, ...rest] = nums; //rest operator packs n args into an iterable array
console.log(first, rest); //

// OBJECT DESTRUCTURING

var p1 = { name: "dan", age: 34 };

//OLD SCHOOL
var name1 = p1.name;
var age1 = p1.age;

//DESTRUCTURING
// prop names must be known
var { name, age } = p1;
// we can alias the prop names but must know the original names
var { n = name, a = age } = p1; //TODO use aliasing with equals not as, alias first
console.log(name, age);
console.log(n, a);
