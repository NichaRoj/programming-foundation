import React from "react"
import logo from "../logo.svg"
import "./App.css"
import Counter from "./counter/counter"
import LoginForm from "./login"
import "antd/dist/antd.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <Counter name="world" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
