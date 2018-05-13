import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    searchResultsFound: false,
    searchResults: []
  }

  updateTerm = query => {
    this.setState({query: query});
    this.searchBooks();
  }

  searchBooks = () => {
    BooksAPI.search(this.state.query).then(books => {
      if (books &&  books.length > 0) {
        if (this.props.currentBooks) {
          this.props.currentBooks.forEach(element => {
            let i = books.findIndex(b => element.id === b.id);
            books = books.filter((book) => (book.imageLinks))
            books[i] = element;
          });
        }

        this.setState({
          searchResultsFound: true,
          searchResults: books
        });
      } else {
        this.setState({ searchResultsFound: false });
      }
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={event => this.updateTerm(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <li>
              {this.state.searchResultsFound &&
                <Book
                  books={this.state.searchResults}
                  updateBook={(book, shelf) => this.props.onBookShelfChange(book, shelf)}
                />}
            </li>
          </ol>
          </div>
      </div>
    )
  }
}

export default SearchBooks