import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Navigator from './Navigator';

// uri:
//   Platform.OS === 'android'
//     ? 'http://10.0.2.2:5555/'
//     : 'http://localhost:5555',

//graphQL endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:5555',
  //needed for cookie access
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const RootWrapper = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
);

export default class App extends React.Component {
  render() {
    return <RootWrapper />;
  }
}
