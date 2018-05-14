import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  render() {

    return (
      <div className="app">
          <Route exact path="/" component={Main} />
          <Route path="/search" component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp