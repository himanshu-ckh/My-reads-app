import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Title from './Title'
import ListBooks from './ListBooks'
import * as BooksAPI from '../BooksAPI'

class Main extends Component {
	state = {
		books: []
	}
	componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  updateBook = (book, shelf) => {

    book.shelf = shelf

    if (this.state.books.filter((b) => b.id === book.id).length > 0) {
      this.setState((state) => ({
        books: state.books.map((b) => {
          if (b.id === book.id) {
            b = book
          }
          return b
        })
      }))
    } else {
      this.setState((state) => ({
        books: state.books.concat([book])
      }))
    }

    BooksAPI.update({id: book.id}, shelf)

  }
	render() {
		return (
			<div className="main-page">
				<Title />
				<ListBooks books={this.state.books} updateBook={this.updateBook} />
			</div>
	)
}
}

export default Main