import React from "react";

class Counter extends React.Component {
  constructor(props: { name: string }) {
    super(props);
    this.state = {
      number: 0,
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    this.setState((oldState: any) => ({
      number: oldState.number + 1,
    }));
  }

  subtract() {
    this.setState((oldState: any) => ({
      number: oldState.number - 1,
    }));
  }

  render() {
    return (
      <div>
        <h2>Counter: {(this.state as any).number}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <p>Hello, {(this.props as any).name}</p>
      </div>
    );
  }
}

export default Counter;
