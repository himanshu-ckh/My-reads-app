import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    queryBooks: []
  }

  updateTerm = query => {
    this.setState({query: query.trim()})
    const maxResult = 20;
    if(query) {
      BooksAPI.search(query, maxResult).then((result) => {
        this.searchBooks(result)
        if(result.length>0){
          this.setState({queryBooks: result})
        } else {
          this.setState({queryBooks: []})
        }
      })
    } else {
      this.setState({queryBooks: []})
    }
  }

  searchBooks = (values) => {
    for(let book of values)
    {
       book.shelf='none'
    }
    for(let value of Array.from(values)){
      for(let book of this.props.books) {
        if(value.id === book.id){
          value.shelf=book.shelf
        }
      }
    }
    this.setState({queryBooks: values})
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}  onChange={event => this.updateTerm(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            {this.state.queryBooks && ( this.state.queryBooks.map((book) => (
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