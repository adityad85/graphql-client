import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
