/**
 * in React we prefer to use pure functions
 * a pure function always produces the same output for the same input
 * this is not necesarily the case,
 * where a function has external or global depencies
 */
// impure function with one global dependency
var x = 1;
function incrementX() {
  console.log((x = x + 1));
}
incrementX(); //2
incrementX(); //3
x = 101;
incrementX(); //102
incrementX(); //103...
console.log(x); //

var y = 1;
function incrementXPure(num) {
  console.log((num = num + 1));
}
incrementXPure(y); //2
console.log(y); //1 original unchanged
// this function is pure
