import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    searchResultsFound: false,
    queryBooks: []
  }

  updateTerm = query => {
    this.setState({query: query});
    this.searchBooks();
  }

  searchBooks = () => {
    BooksAPI.search(this.state.query).then(newbooks => {
      if (newbooks &&  newbooks.length > 0) {
        if (this.props.currentBooks) {
          this.props.currentBooks.forEach(element => {
            let i = newbooks.findIndex(b => element.id === b.id);
            newbooks[i] = element;
          });
        }
        this.setState({
          searchResultsFound: true,
          queryBooks: newbooks
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
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={event => this.updateTerm(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            {this.state.queryBooks && (
              this.state.queryBooks.map((book) => (
                <li key={book.id}>
                  <Book updateBook={this.props.updateBook} book={book} />
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks