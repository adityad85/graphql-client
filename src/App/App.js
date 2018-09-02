import React from 'react';


import BookList from '../components/BookList';
import AddBook from '../components/AddBook';


class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h1>Heya</h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
