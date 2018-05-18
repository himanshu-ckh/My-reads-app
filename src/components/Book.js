import React, {Component} from 'react'

class Book extends Component {
  render() {
  return (
    <div className="book">
      <div className="book-top">
    {/*this will create a div if the image is available and add the image of the book else it will create a div without the books image cover*/}
        {this.props.book.imageLinks ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}></div>
                : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url()`}}></div>}
        <div className="book-shelf-changer">
        {/*Default value will be the present shelf the book is in and on change of the shelf the book is updated with the new shelf using updateBook function*/}
          <select defaultValue={this.props.book.shelf} onChange={(e) => {this.props.updateBook(this.props.book, e.target.value)}}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None </option>
          </select>
        </div>
        </div>
      <div className="book-title">{this.props.book.title}</div>
    {/*if the books have multiple authors they will be joined with a ", " */}
      <div className="book-authors">{this.props.book.authors && (this.props.book.authors.join(', '))} </div>
    </div>
  )
}
}

export default Book