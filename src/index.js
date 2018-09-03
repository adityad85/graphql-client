import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  uri: 'https://server-graphql-app.herokuapp.com/graphql',
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
