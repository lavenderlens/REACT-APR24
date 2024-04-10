/**
 * there re 3 keywprds for declaring variables in JS
 * var
 * let
 * const
 * of the three, only the last two are what we call block-scoped
 * that is, values may not be accessed out of the block of code
 * in which they are declared
 */

// var may be redeclared and re-assigned
// let may be re-assigned but nor redeclared
// const may neither be re-assigned nor redeclared and must be initialised
// but references WITHIN a cont variable may be mutated...

// var
var x; //undefined
x = 1;
x = 2;
console.log(x);
var x;
console.log(x); //2 - keeps value

y = 3; //accidental global, not permitted under strict mode
// strict mode used for ALL production code / frameworks]
console.log(y);

// var and accidental global both put props on the Window object

//let
// let x; //SyntaxError: Identifier 'x' has already been declared
let z; //undefined
z = 1;
z = 2;

//const
//const a;//must be initialised
const a = 1;
// a = 2;//TypeError: Assignment to constant variable.

const dimensions = { width: 1200, height: 900, depth: 600 };
dimensions.width = 1500;
console.log(dimensions.width);
console.table(dimensions);
// dimensions = true;
