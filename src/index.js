import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
/* Added browser router */
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
