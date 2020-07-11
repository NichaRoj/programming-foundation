import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const showQuestion = (
  question: string,
  callback: (answer: string) => void
) => {
  rl.question(question, (answer) => {
    callback(answer);
  });
};

export const close = () => {
  rl.close();
};
