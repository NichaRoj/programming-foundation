import React from "react"
import { Button } from "antd"

interface CounterProps {
  name: string
}

class Counter extends React.Component<CounterProps> {
  constructor(props: CounterProps) {
    super(props)
    this.state = {
      number: 0,
    }

    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
  }

  add() {
    this.setState((oldState: any) => ({
      number: oldState.number + 1,
    }))
  }

  subtract() {
    this.setState((oldState: any) => ({
      number: oldState.number - 1,
    }))
  }

  render() {
    return (
      <div>
        <h2>Counter: {(this.state as any).number}</h2>
        <a href="www.google.com" />
        <Button type="primary" onClick={this.add}>
          Add
        </Button>
        <Button danger={true} onClick={this.subtract}>
          Mango Salad
        </Button>
        <p>Hello, {this.props.name}</p>
      </div>
    )
  }
}

export default Counter
