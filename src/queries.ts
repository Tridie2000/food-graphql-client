import { graphql } from 'react-apollo';
import a from './queries.graphql';

console.warn(a);
// export const getStoresQuery = graphql(getStores, {
//   name: 'storesData',
// });

export const getStoresQuery = (a: any) => a;