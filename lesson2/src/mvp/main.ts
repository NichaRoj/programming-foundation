// Welcome to main.ts! This file will be the starting point for our program.
// I *try* to create the situation as similar to Android development as possible.
// It won't be identical, but I hope it's enough to get to know how to write a code MVP style

// Here's the main function which will be the starting point.
// I have also written a script to run this file as well.
// Just run 'yarn start:mvp' command.
// Next, let's check the other files: view.ts, presenter.ts, and model.ts
import { ViewManager } from "./view";

const main = () => {
  // console.log("Hello World!");
  ViewManager.start();
};

main();
