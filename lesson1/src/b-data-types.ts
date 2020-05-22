// Let's learn about basic data types!!
// The types we will learn are the ones already defined by the language.
// For other types, you will need to define them yourselves.
// In Typescript, the basic data types are...
const bool = true; // Boolean: true or false
const num = 12.3; // Number. In other languages, it is usually split into int and float.
const str = "hello world"; // String.
const arr = [num, str, "what"]; // Array. Basically a group of values.

// In addition, there are special types as well.
// We already saw `null` and `undefined`.
// `null` is its own type, and only value is `null`.
// `undefined` is literally undefined. On the memory level, variables with undefined do not have pointers to where the value actually is.
// There is also type `void` which means lack of any types, but it is not undefined.
// And there's `never` which represents a value that will never occur.
// Let's ignore the difference between `null` `undefined` `void` and `never`
// There's also `any` which is basically the umbrella type for all types excluding `void` and `never`.
// Finally, type `object` is used to represent non-primitive types.

// Primitive types and basic types are not the same!
// Primitive types are one defined at the core of the languages.
// Basic types are ones most often used.
// So anything aside from `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, and `undefined` are non-primitive.

// Now, when initializing variables in Typescript, types are implicit from values during initialization.
let var1; // This variable has type `any` but it is `undefined`.
var1 = 10;
var1 = "var1"; // As you can see, it can have value of any types.

let var2 = 10; // This variable has type number
// var2 = 'var2' // So this will cause an error

// We can explicitly define type too
let var3: string;
var3 = "var3";
// var3 = 10 // This will cause an error.

// And if a variable can have be multiple types, `|` can be used to indicate that too.
let var4: string | number = 10;
var4 = "10";
