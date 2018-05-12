import React, {Component} from 'react'
import Book from './Book'

class ListBooks extends Component {

  BooksOnCRShelf(books, shelf) {
    const filteredBooks = books.filter((book) => book.shelf === shelf)

    return filteredBooks.map((book) => (
      <li key={book.id}>
        <Book
          updateBook={this.props.updateBook}
          book={book}
        />
      </li>
    ))
  }

  BooksOnWTRShelf(books, shelf) {
    const filteredBooks = books.filter((book) => book.shelf === shelf)

    return filteredBooks.map((book) => (
      <li key={book.id}>
        <Book
          updateBook={this.props.updateBook}
          book={book}
        />
      </li>
    ))
  }

  BooksOnRShelf(books, shelf) {
    const filteredBooks = books.filter((book) => book.shelf === shelf)

    return filteredBooks.map((book) => (
      <li key={book.id}>
        <Book
          updateBook={this.props.updateBook}
          book={book}
        />
      </li>
    ))
  }

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.BooksOnCRShelf(books, 'currentlyReading')}
                  </ol>
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.BooksOnWTRShelf(books, 'wantToRead')}
                  </ol>
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.BooksOnRShelf(books, 'read')}
                  </ol>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks