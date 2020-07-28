// Welcome to the presenter!
// Here, we will write each presenter for each of our views.
// I have already created one for RegisterView.
// It's not complete since it needs to be connected to the model.
export class RegisterPresenter {
  private view;
  private model;
  private name;
  private password;

  constructor(view) {
    this.view = view;
    // Initialize model here
  }

  public createAccount(name, password) {
    // Tell model to create an account

    this.view.showSuccessfulMsg();
  }

  public checkName(name) {
    const accounts = this.model.getAllAccounts() as { name }[];
    if (accounts.find((each) => each.name === name)) {
      this.view.showSameNameMsg();
    } else {
      this.view.showAskPassword();
    }
  }
}
