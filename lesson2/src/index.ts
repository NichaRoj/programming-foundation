/** Object-Oriented Programming (OOP)
 *
 * Goal: Reuse components and enforce type checks
 * Characteristics:
 *    - Abstraction: The process of picking out (abstracting) common features of objects and procedures.
 *    - Encapsulation: The process of combining elements to create a new entity. A procedure is a type of encapsulation because it combines a series of computer instructions.
 *    - Inheritance: a feature that represents the "is a" relationship between different classes.
 *    - Polymorphism: A programming language's ability to process objects differently depending on their data type or class.
 *
 * Topics:
 *    - Interfaces
 *    - Classes
 *    - Superclass/Subclass
 */

// Let's start with interface!
// If you recall, Typescript has basic data types which can be explicitly assigned to variables.
// However, what if we want to give a variable a more complex type?
// For example, a bank account would have at least a name and the total number of money in that account.
// Since the type is more complex than the types Typescript has, the type would fall under `object`
// `object` is an umbrella type for any data types that we create ourselves.
let bankAccountAName = "Meen";
let bankAccountATotal = 467.3;

let bankAccountA = {
  name: "Meen",
  total: 4671.23,
};

// This variable will have the type `object` which has `name` and `total` as its properties.
// But what if we want to define this type to variables or inputs of a function?
let abc: number;
let bankAccountB: {
  name: string;
  total: number;
};
let func = (amount: number) => {};
let someFunc = (account: { name: string; total: number }) => account;

// But we don't want to repeat it again and again, so we will create an interface for it!
// And since function is a special data type, we can give a property with a function too!
interface BankAccountInt {
  name: string;
  total: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
}

// Now we can just assign the interface anywhere we want
let bankAccountC: BankAccountInt;

// However, deposit and withdraw should work the same way for all bank accounts
// But we still need to define deposit and withdraw every time we create a BankAccount
bankAccountC = {
  name: " Nicha",
  total: 350.42,
  deposit: (amount: number) => {
    this.total += amount; // This means this.total = this.total + amount
  },
  withdraw: (amount: number) => {
    this.total -= amount; // This means this.total = this.total - amount
  },
};

// It will still work though
bankAccountC.deposit(50);
console.log(`bankAccountC Total: ${bankAccountC.total}`);

// If `interface` is just a blueprint, then a `class` is a robot that will start working whenever we want
class BankAccount {
  constructor(
    public name: string,
    public total: number,
    private SSN: string = "49635"
  ) {} // name and total become BankAccount's properties

  public deposit(amount: number) {
    this.total += amount;
  }

  public withdraw(amount: number) {
    this.total -= amount;
  }

  printSSN() {
    console.log(bankAccountD.SSN);
  }
}

// Now we can easily create a bank account
let bankAccountD = new BankAccount("Emma", 0, "74996");
bankAccountD.deposit(500);
console.log(`bankAccountD Total: ${bankAccountD.total}`);
bankAccountD.printSSN();

// This new account is called an instance of a BankAccount.
// Now, let's take note of some keywords.
// `this` is usually used within a class or an object to point to its properties instead of any variables outside
// `public` defines the scope where the properties or functions can be called.
// If a property or a function is `private` then it cannot be called outside of that instance.
// There is also a keyword `static` which means that property or function can be used without creating an instance.

class Message {
  // constructor is not needed if there is no non-static properties.
  static INFO = 0;
  static WARNING = 1;
  static ERROR = 2;
  static print = (msg: string) => {
    console.log(msg);
  };
}

// Those properties can be called by refering to the class
Message.print(`${Message.INFO}`);
