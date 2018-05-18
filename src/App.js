import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
		books: []
	}

/*This will get all the books from the BooksAPI.js*/
	componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

/* function -->  if the new book is already not in the shelf then add it to the shelf else set the new shelf and set the new state for the books*/
  updateBook = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then( ()=> {
      let newBook = this.state.books.filter( (b) => b.id !== book.id)
      newBook.push(book)
      this.setState({books: newBook});
    });
  }

	render() {
		return (
			<div>
        <Switch>
				  <Route exact path='/' render={() => (<ListBooks books={this.state.books} updateBook={this.updateBook}/>)}/>
        </Switch>
        <Switch>
        	 <Route path='/search' render={() => (<SearchBooks books={this.state.books} updateBook={this.updateBook}/>)}/>
        </Switch>
				</div>

	)
}
}

export default BooksApp