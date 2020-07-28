// Next, let's learn about software architecture!
// But let's not try to define what a SA is but look at what it is used for.
// Try to go on a website and then try to define each component what it is used for.
// You will find that...damn there's a lot! Seriously, a lot!
// And when there are so many of them, then how do you keep your code base clean?
// In addition, how do you make sure that any changes in the future would not destroy what's already been done?
// Software Architecture helps with that! It separates a project into more manageable components.
// And there are many practices for that. And people still keep coming up with new ones right now.

// Today we are going to learn MVP. That's short for Model-View-Presenter
// If you are not instructed by me then you should google!
// And read the comparison of MVP with MVC and MVVM as well!
// But most importantly, don't forget to look at the examples! It really helps.
// https://medium.com/cr8resume/make-you-hand-dirty-with-mvp-model-view-presenter-eab5b5c16e42

// However, the best way to learn is to try our hands on it!
// So let's make a simple terminal-based ATM where we can register a new account, and also deposit/withdraw from the account as well.

// First, we must read the input from terminal somehow.
// Since it can be quite complicated, we will borrow 'readline' module to do that.
// To use external modules/libraries, the keyword
import * as readline from "readline";

// Now we are ready to use 'readline' module!
// We can consult its document for its usage here: https://nodejs.org/api/readline.html#readline_readline
// Here's one example for using the module.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Is this working? [y/n]", (answer) => {
  switch (answer) {
    case "y":
      console.log("Nice");
      break;
    case "n":
      console.log("Then how did you type?");
      break;
  }

  rl.close();
});

// Okay, now we know how build an interface for us to interact, let's move on to MVP.
// First, check out main.ts
