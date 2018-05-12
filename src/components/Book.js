import React from 'react'
import PropTypes from 'prop-types'

function Book (props) {
  const {book} = props

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
        </div>
        <div className="book-shelf-changer">
          <select
            onChange={(event) => {
              props.updateBook(book, event.target.value)
            }
            }
            defaultValue={book.shelf}
          >
            <option value="none" disabled>Move to...</option>
            <option
              value="currentlyReading"
            >Currently Reading
            </option>
            <option
              value="wantToRead"
            >Want to Read
            </option>
            <option
              value="read"
            >Read
            </option>
            <option
              value="none"
            >None
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && (book.authors.join(', '))}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default Book