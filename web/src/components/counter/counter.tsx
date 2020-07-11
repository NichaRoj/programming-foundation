import React from "react";
import { defaultCipherList } from "constants";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState((state) => ({
      number: state["number"] + 1,
    }));
  }

  subtract() {
    this.setState((state) => ({
      number: state["number"] - 1,
    }));
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state["number"]}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}

export default Counter;
