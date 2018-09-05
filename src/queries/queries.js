import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`;

const getBooksQuery = gql`
{
  books {
    name
    id
  }
}
`;

const getBookQuery = gql`
query($id: ID){
  book(id: $id) {
    name
    id
    genre
    author{
      id
      name
      age
      books{
        name
        id
      }
    }
  }
}
`;

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!){
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
    id
  }
}
`;

const addAuthorMutation = gql`
mutation($name: String!, $age: Int!){
  addAuthor(name: $name, age: $age){
    name
    age
  }
}
`;

export {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation,
  addAuthorMutation,
  getBookQuery,
};
