import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import {Switch , Link, Route,BrowserRouter as Router, Redirect} from 'react-router-dom';
import Box from './Box'
import Books from './Books'
import About from './About'
import Search from './Search'

import React from 'react';
import { withRouter } from 'react-router-dom';
class SearchBar extends React.Component  {
  state= {
    books:[],
    bookName:'',
    redirect: false
  }
  handleFormSubmit = async(event) => { 
    event.preventDefault();
    const searchItem = this.state.bookName
    const url = `http://localhost:8080/books?bookName=${searchItem}`
    let response = await fetch(url)
    const json = await response.json();
        this.setState({
          books: json,
          redirect: true 
        })
        this.props.history.push({
          pathname: '/books',
          state: { books: this.state.books }
        })
   
  }
  handleFormChange = (event) => {
    this.setState({ bookName: event.target.value })
  }
  render(){
    return (    <form onSubmit={this.handleFormSubmit}>
    <input type = "search" name = "bookName" className = "" value={this.bookName} onChange={this.handleFormChange}/>
    <button className = "btn-search">Search</button>
  </form>)

}
}

export default withRouter(SearchBar);