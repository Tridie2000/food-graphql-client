import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CreateReservation from './createReservation';

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000"
});

// ⚽️  Goal
// --------

// We want to create a webapp to reserve products (food).
// Some ingredients we need: a store, products and reservations.
// First of all we want a list of stores. After we have chosen
// a store, we get a list of products (query) of that store.
// We pick some products, pick a quantity, and we make a reservation (mutation)

// 🏪  Exercise 1
// --------------

// 1) First we need to create a query to get all the stores.
// 

class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <CreateReservation />
      </ApolloProvider>
    );
  }
}

export default App;
