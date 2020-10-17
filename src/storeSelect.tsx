import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import * as queries from "./queries.graphql";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { storeKeyNameFromField } from "@apollo/client/utilities";

const Select = styled.select`
  height: 32px;
  width: 200px;
`;

interface Store {
  id: string;
  name: string;
}

interface StoreSelectProps {
  value: string;
  onChange: Function;
}

const StoreSelect = React.memo(({ value, onChange }: StoreSelectProps) => {
  const onChangeStore = React.useCallback((e) => {
    e.preventDefault();
    onChange(e.target.value);
  }, []);

  const { loading, error, data } = useQuery(queries.getStores);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <label>
      Pick a store:
      <select value={value} onChange={onChangeStore}>
        {data.stores.map((store: Store) => (
          <option key={store.id} value={store.name.toLowerCase()}>
            {store.name}
          </option>
        ))}
      </select>
    </label>
  );
});

export default StoreSelect;
