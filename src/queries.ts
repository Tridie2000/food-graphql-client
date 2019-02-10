import { gql } from 'graphql.macro';
import { graphql } from 'react-apollo';

export const GET_STORES = gql`
  query getStores {
    stores() {
      id
      name
    }
  }
`;

export const getStoresQuery = graphql(GET_STORES, {
  name: 'storesData',
});