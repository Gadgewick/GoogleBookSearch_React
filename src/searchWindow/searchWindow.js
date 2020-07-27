import React, { Component } from  'react';
//import SearchBar from '../searchBar/searchBar';
import BookList from '../bookList/bookList';

class SearchWindow extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: "",

        };
    }
    titleChanged(title) {
        this.setState({
          title
        });
      }

      handleSubmit(e) {
          e.preventDefault();
          console.log('the title searched for is ' + (this.state.title));

              const encodedSearchQuery = (this.state.title).replace(" ", "+");
              const key = "&key=AIzaSyAn_w5z1bMg4VQqztUglHZXIBj4JkU3cOY";
              const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodedSearchQuery}${key}`;

              fetch(url)
    .then(res => {
      if(!res.ok) {
        throw new Error('something went wrong. Please try again later.');
      }
      return (console.log(res.json()))
    })
    .then(data => {
      this.setState({
        title: "",
        error: null
      });
    
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
      }

    render() {
    

        const error = this.state.error 
          ? <div className="error">{this.state.error}</div>
          : "";

        return (
            <div className="searchBar">
                { error }
            <form className="bookSearchBar__Form" onSubmit={e => this.handleSubmit(e)}>
              <label>Search: </label>
              <input 
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={this.state.title}
              onChange={e => this.titleChanged(e.target.value)}/>
              <label>Print Type: </label>
              <select 
              id="printType"
               >
                <option value="">Select Option</option>
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazine">Magazine</option>
              </select>
              <label>Book Type: </label>
              <select id="bookType" >
                <option value="">Select Option</option>
                <option value="ebooks">All</option>
                <option value="free-ebooks">Free</option>
                <option value="paid-ebooks">Paid</option>
              </select>
            <button type="submit" >Submit</button>
            </form>
            <BookList />
          </div>
        )
    }
}

export default SearchWindow;