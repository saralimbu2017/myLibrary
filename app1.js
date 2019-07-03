import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import {Switch , Link, Route,BrowserRouter as Router, Redirect} from 'react-router-dom';
import Box from './Box'
import Books from './Books'
import About from './About'


class App extends React.Component {
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
      // .then(res => res.json())
      // .then(res => {
        this.setState({
          books: json,
          redirect: true 
        })
      // })
    //   const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    //   const json = await response.json();
    //   this.setState({ data: json });
    // }
   
  }
  handleFormChange = (event) => {
    this.setState({ bookName: event.target.value })
  }
  render() {
    const { redirect } = this.state;
    //const { books } = this.state.books;
    if (redirect) {
      return (<Router>
         <div>
      
        {/* <Redirect to={{
            pathname: '/books',
            state: { 
            books: this.state.books}
        }} /> */}
         <Redirect to={{
            pathname: '/about',
            state: { 
            books: this.state.books}
        }} />
       </div>
       
      </Router> )
    }
    return (
      <Router>
        <div className="App">
          <div className = "ui-container">
            <Switch>
              <Route exact path="/" render = {() => 
              <Form handleSubmit = {this.handleFormSubmit} value ={this.state.bookName} handleChange={this.handleFormChange}/> } />
              <Route path="/books" component = {Books}/>
            
              <Route path="/about" component = {About} />
           
            </Switch>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;

