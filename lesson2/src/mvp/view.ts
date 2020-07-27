// Welcome to the view!
// Here, we will specify all the messages that will be shown on the screen.
// In addition, we will specify how and when the screen will change as well.
// The top part will be all the messages I have filled so you can focus on the codes and understanding MVP.
// Scroll down to the bottom to start!
import * as rl from "./rl";
import { RegisterPresenter } from "./presenter";

const welcomeMsg = [
  "Welcome to the ATM!!! Please select a number for the service you would like.",
  "1: Register an account",
  "2: Deposit/withdraw cash",
  "3: Check account information",
  "4: Exit\n",
].join("\n");

const registerMsg = [
  "Please specify the name of the account.\n",
  "Please type the password to access the account.\n",
  "Please type the password again.\n",
];

const registerSuccessMsg =
  "Thank you! Your account has been created successfully.\n";
const registerSameNameMsg =
  "Sorry, that account has already been created. Please choose a different name.\n";
const registerIncorrectPasswordMsg =
  "Sorry, the password is not identical. Please try typing the password again.\n";

const accessMsg = [
  "Please specify the name of the account.\n",
  "Please type the password to access the account.\n",
];

const accessWrongNameMsg =
  "Sorry, the account you are trying to access does not exist in the system.\n";
const accessWrongPassMsg =
  "Sorry, the password for the account you are trying to access is incorrect.\n";

const depositMsg = "Please specify the amount of cash you wish to deposit.\n";
const depositRes = (amount: number) =>
  `$${amount} has been deposited. Returning to the menu...\n`;

const withdrawMsg = "Please specify the amount of cash you wish to withdraw.\n";
const withdrawRes = (amount: number) =>
  `$${amount} has been withdrawn. Returning to the menu...\n`;

const infoMsg = (name: string, amount: string) =>
  `There is $${amount} in ${name} account.\n`;

const exitMsg = "Thank you for your patronage.\n";

// Here is where all the classes that will represent the many views are.
// I have created two views out of four necessary for the ATM.
// Please complete the last two classes.

class RegisterView {
  private presenter;

  public show() {
    this.presenter = new RegisterPresenter(this);

    rl.showQuestion(registerMsg[0], (answer) => {
      this.presenter.checkName(answer);
    });
  }

  public showSameNameMsg() {
    rl.showQuestion(registerSameNameMsg, (answer) => {
      this.presenter.checkName(answer);
    });
  }

  public showAskPassword() {
    rl.showQuestion(registerMsg[1], (answer) => {
      this.showAskPasswordAgain();
    });
  }

  public showAskPasswordAgain() {
    rl.showQuestion(registerMsg[2], (answer) => {});
  }

  public showIncorrectPassword() {
    rl.showQuestion(registerIncorrectPasswordMsg, (answer) => {});
  }

  public showSuccessfulMsg() {
    console.log(registerSuccessMsg);
    ViewManager.changeView("Menu");
  }
}

class ExitView {
  public show() {
    console.log(exitMsg);
    process.exit(0);
  }
}

class MenuView {
  public show() {
    rl.showQuestion(welcomeMsg, (answer) => {
      switch (answer) {
        case "1":
          ViewManager.changeView("Register");
          break;
        case "2":
          break;
        case "3":
          break;
        case "4":
          ViewManager.changeView("Exit");
          break;
      }

      rl.close();
    });
  }
}

export class ViewManager {
  private static menuView = new MenuView();
  private static registerView = new RegisterView();
  private static exitView = new ExitView();

  public static start() {
    this.menuView.show();
  }

  public static changeView(name: string) {
    switch (name) {
      case "Menu":
        this.menuView.show();
        break;
      case "Register":
        this.registerView.show();
        break;
      case "Exit":
        this.exitView.show();
        break;
    }
  }
}
