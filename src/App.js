import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './components/Main'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route exact path="/" component={Main} />
      </div>
    )
  }
}

export default BooksApp