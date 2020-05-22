// Let's learn about variables!
// In Typescript, to create a variable, it must follow either `let` or `var` keyword.
// They are similar yet slightly different, but this will be talked about later.
let a;
var b;

// If there's no value given, then those values will be `undefined`.
console.log("a is " + a);
console.log(`b is ${b}`);

// Importantly, `undefined` is different from `null`!
// == and === are also not the same! We will talk about this later.
console.log(null == undefined);
console.log(null === undefined);

// In addition to `let` and `var`, `const` can be used to create a constant.
// A constant cannot be undefined, so you must give it a value.
// It can be null though.
const c = 10;
// const d

// The difference between variables and constants is obvious.
// You can change values in variables, but not in constants.
// If you try to change a constant's value, you'll be greeted by an error.
a = 5;
b = c;
// c = 17

console.log(`a is ${a}`);
console.log(`b is ${b}`);
