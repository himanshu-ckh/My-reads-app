import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './components/Main'
import Searchbooks from './components/SearchBooks'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Searchbooks} />
      </div>
    )
  }
}

export default BooksApp