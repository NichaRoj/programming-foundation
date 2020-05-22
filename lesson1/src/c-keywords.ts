// Next, let's learn about some keywords in typescript!
// First is `for` loop! Very useful when you want to repeat a task to a group of variables (Remember array?)
// Note the difference between for...in and for...of!
let arr1 = ["a", "b", "c", "d", "e"];
for (let i in arr1) {
  // i represents the key in the array! So i would be 0, 1, 2,...
  console.log(`i = ${i}`);
  console.log(`arr1[i] = ${arr1[i]}`);
}

for (let val of arr1) {
  // val represents the values in the array! So val would be a, b, c,...
  console.log(`val = ${val}`);
}

// Another keyword similar to `for` is `while`
// Be sure to check for the iterator though! Otherwise you might get an infinite loop!
var i = 0;
while (i < 3) {
  console.log(`arr1[i] = ${arr1[i]}`);
  i++; // This expression is equal to `i = i + 1`
}

// Now, if you want to add some logic to the code, you should use `if-else`
let arr2 = [];
if (arr1.length === 5) {
  console.log("First block is reached!");
} else if (arr2.length === 0) {
  console.log("Second block is reached!");
} else {
  console.log("Third block is reached!");
}

// if-else can also be inline
console.log(arr2.length === 0 ? "arr2 is empty!" : "arr2 is not empty!");

// But if you don't want to write a long if-else, you can use `switch-case` instead.
const animal: string = "dog";
switch (animal) {
  case "dog": {
    console.log("woof!");
    break; // You must add this keyword so the result won't leak to other cases too!
  }
  case "cat": {
    console.log("meow!");
    break; // To see how a program can misbehave, try deleting this.
  }
  default: {
    console.log("eh???");
  }
}

// Now comes the fun part. Let's try to create a function!
// I honestly don't know how to define a function, so let's just create one.
// Let's make a function that adds two numbers together!
function plus(a: number, b: number): number {
  return a + b;
}
// In the function above, its name is `plus` and it accepts two variables `a` and `b`, both of which are numbers.
// It also returns a result of type number.
// To use a function is very simple. Just smack some stuff in.
console.log(`10 + 5 = ${plus(10, 5)}`);

// Function can also be considered a special type.
const minus = function (a: number, b) {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => a / b;
// This is what I meant.
// And as you can see, I leave out some parts too.
// Like in `minus`, the result would be implicitly number, but `b` would allow `any` type of values.
// In `divide`, the logic can be written in one line so I can shorten it.

// Now, since it is kinda technically a type, it can also be an input in a function as well.
const doSomething = (action: (input) => void, target) => {
  action(target);
};
// Okay this is confusing.
// First, there are two inputs. `action` and `target`. `target` accepts any values.
// But `action` accepts a function. And not any function, but a function that accepts one `any` input and returns `void` i.e. nothing.
// Also `doSomething` is considered returning `void` because it doesn't return anything.
// Let's try using it.
const printSomething = (input) => {
  console.log(input);
};

doSomething(printSomething, "Hello World!");

// Finally, we might want to reuse functions and variables.
// But we also don't want to make a file too large.
// Now, there are many ways to do that.
// ES6 uses `import` and `export` while CommonJS uses `require` and `exports`
// They are not completely compatible and ES6 is considered more modern, so let's use ES6 for now.
export const str = "Hello World!";
export function doTheThing(input) {
  console.log(input);
}
export default doSomething;
