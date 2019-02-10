import { graphql } from 'react-apollo';
import { getStores } from './queries.graphql';

export const getStoresQuery = graphql(getStores, {
  name: 'storesData',
});