import React from 'react'

function Book (props) {
  const {book} = props
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://books.google.com/googlebooks/images/no_cover_thumb.gif)`}}></div>}
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={(e) => {props.updateBook(book, e.target.value)}}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None </option>
          </select>
        </div>
        </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authores">{book.authors && (book.authors.join(', '))} </div>
    </div>
  )
}

export default Book

