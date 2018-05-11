import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="app">
      <Switch>
          <Route exact path="/" component={Main} />
          </Switch>
      </div>
    )
  }
}

export default App