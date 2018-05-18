import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'
import Title from './Title'


class ListBooks extends Component {
/*all these functions will add the books on the respective shelf*/
/*Currently reading function*/
  BooksOnCRShelf(books, shelf) {
    const cRBooks = books.filter((book) => book.shelf === shelf)
    return cRBooks.map((book) => (
      <li key={book.id}>
        <Book updateBook={this.props.updateBook} book={book}
        />
      </li>
    ))
  }

/*Want to read function*/
  BooksOnWTRShelf(books, shelf) {
    const wTRBooks = books.filter((book) => book.shelf === shelf)
    return wTRBooks.map((book) => (
      <li key={book.id}>
        <Book updateBook={this.props.updateBook} book={book} />
      </li>
    ))
  }

/*Read function*/
  BooksOnRShelf(books, shelf) {
    const rBooks = books.filter((book) => book.shelf === shelf)
    return rBooks.map((book) => (
      <li key={book.id}>
        <Book updateBook={this.props.updateBook} book={book} />
      </li>
    ))
  }

/*render to return the bookshelf*/
  render() {
    const {books} = this.props

    return (
      <div className="list-books">
      <Title />
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
              {/*this will call the function and add the books on currentlyReading shelf*/}
                  <ol className="books-grid">
                    {this.BooksOnCRShelf(books, 'currentlyReading')}
                  </ol>
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
              {/*this will call the function and add the books on wantToRead shelf*/}
                  <ol className="books-grid">
                    {this.BooksOnWTRShelf(books, 'wantToRead')}
                  </ol>
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
              {/*this will call the function and add the books on read shelf*/}
                  <ol className="books-grid">
                    {this.BooksOnRShelf(books, 'read')}
                  </ol>
                </div>
            </div>
          </div>
        </div>
      {/* this will create a link to add the books and link to the page of search*/}
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks