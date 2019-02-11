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

// 🏪  Exercise 3
// --------------

// 1) Now we want to create a mutation to create a reservation.
//    First we define a mutation createReservation in the mutations.graphql file.
//    We want the id and date of the newly created reservation.
// 2) Extend the productTable with an extra column to select
//    the quantity.
// 3) Use `compose` of react-apollo to inject the mutation
//    in the CreateReservation component.
// 4) Use the mutation when the form is submitted.
//    Convert the hash of { productId: quantity } to an array of [{ productId, quantity }]
//      Object.keys(reservationProducts).map(productId => ({
//        productId,
//        quantity: reservationProducts[productId]
//      }))
//    Use this as one of the variables.
// 5) Check out your network tab and see what the result is of the mutation.
//    You will see the id and date as result of the mutation.
//
// CONGRATS, ALL EXERCISES ARE COMPLETED!

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
