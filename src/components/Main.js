import React, {Component} from 'react'
import Title from './Title'
import ListBooks from './ListBooks'
import AddBooks from './AddBooks'

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
				<Title />
				<ListBooks books={this.state.books} updateBook={this.updateBook} />
				<AddBooks />
				</div>
	)
}
}

export default Main