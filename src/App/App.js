import React from 'react';
import './index.css';

import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import AddAuthor from '../components/AddAuthor';


class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Book List</h1>
        <BookList />
        <AddBook />
        <AddAuthor />
      </div>
    );
  }
}

export default App;
