import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import * as queries from './queries.graphql';

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

  return (
    <Query query={queries.getStores}>
      {({ data: { stores = [] } = {} }) => (
        <Select value={value} onChange={onChangeStore}>
          <option key="default" value="">Select a store</option>
          {stores.map(({ id, name }: Store) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </Select>
      )}
    </Query>
  );
});

export default StoreSelect;




