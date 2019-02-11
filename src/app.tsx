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

// 🏪  Exercise 2
// --------------

// 1) Now we want to display the products of the store.
//    Create a query in queries.graphql to select a store,
//    with its products, given a storeId.
// 2) Create a table with the product data (name, description, price).
// 3) Wrap the table in a Query component, and display the data retrieved
//    from the GraphQL API.

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
