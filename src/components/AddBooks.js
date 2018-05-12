import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddBooks extends Component {
	render(){
		return (
			<div className="open-search">
				<Link to="/search"> Add Book: </Link>
			</div>
		)
	}
}

export default AddBooks