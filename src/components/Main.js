import React from 'react'
import Title from './Title'
import AddBook from './AddBook'
import BookShelf from './BookShelf'

function Main(props){
	return(
			<div className="main-page">
				<Title />
				<BookShelf />
				<AddBook />
			</div>
		)
}

export default Main