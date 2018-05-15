import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
		books: []
	}

	componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBook = (book, shelf) => {
    let newShelfBook = this.state.books.map((b) => {
      if (b.id === book.id) {
        b.shelf = shelf
      }
      return b
    })
    this.setState( {books: newShelfBook} )
    BooksAPI.update(book, shelf)
  }

	render() {
		return (
			<div>
				<Route exact path='/' render={() => (
          			<ListBooks books={this.state.books} updateBook={this.updateBook}/>)}/>
        		<Route path='/search' render={() => (
          			<SearchBooks books={this.state.books} updateBook={this.updateBook}/>)}/>
				</div>

	)
}
}

export default BooksApp