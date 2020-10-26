import React from "react";
import CreateReservation from "./createReservation";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  //uri: "http://foodgraphqlserver:4000",
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
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
//    Define the query in the queries.graphql file.
// 2) Create a select component for the store in the storeSelect.tsx file.
// 3) Use the Query component from react-apollo to connect the select
//    component with the GraphQL backend.

class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <CreateReservation />
      </ApolloProvider>
    );
  }
}

export default App;
