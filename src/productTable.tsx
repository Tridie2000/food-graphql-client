import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import QuantitySelect from './quantitySelect';
import * as queries from './queries.graphql';

const Table = styled.table`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Tr = styled.tr`
  > td {
    padding-bottom: 16px;
  }
`

const Description = styled.div`
  font-size: 12px;
`;

const PriceTd = styled.td`
  padding-left: 64px;
  padding-right 16px;
  vertical-align: top;
`;

const QuantityTd = styled.td`
  padding-left: 16px;
  padding-right 16px;
  width: 64px;
`;

interface Product {
  description: string;
  name: string;
  price: number;
  id: string;
}

interface ProductTableProps {
  onChangeQuantity: Function;
  storeId: string
}

const ProductTable = React.memo(({ onChangeQuantity, storeId }: ProductTableProps) => {
  return (
    <Query query={queries.getStore} skip={!storeId} variables={{ id: storeId }}>
      {({ data }) => (
        <Table>
          <tbody>
            {data && data.store && data.store.products.map(({ description, id, name, price }: Product) => (
              <Tr key={id}>
                <td>
                  <div>{name}</div>
                  <Description>{description}</Description>
                </td>
                <PriceTd>€ {price.toFixed(2)}</PriceTd>
              </Tr>
            ))}
          </tbody>
        </Table>
      )}
    </Query>
  );
});

export default ProductTable;
