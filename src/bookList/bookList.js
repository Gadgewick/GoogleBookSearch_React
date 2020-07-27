import React, { Component } from 'react';
import BookInfo from '../bookInfo/bookInfo';

class BookList extends Component {

    render() {
        const books = this
            .props 
            .books 
            .map((book, i) => <BookInfo {...book} key={i}/>);

    return(
        <div className="bookList">
            {books}
        </div>
    )}
}

BookList.defaultProps = {
    books: []
};

export default BookList;

