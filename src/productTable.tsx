import { useQuery } from "@apollo/client";
import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";

import QuantitySelect from "./quantitySelect";
import * as queries from "./queries.graphql";

const Table = styled.table`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Tr = styled.tr`
  > td {
    padding-bottom: 16px;
  }
`;

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
  storeId: string;
}

const ProductTable = React.memo(
  ({ onChangeQuantity, storeId }: ProductTableProps) => {
    const { loading, error, data } = useQuery(queries.getProducts, {
      variables: { storeId: storeId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
      <div>
        {data.products.map((product: Product) => (
          <p key={product.id}>
            {product.name}:{" "}
            <QuantitySelect id={product.id} onChange={onChangeQuantity} />
          </p>
        ))}
      </div>
    );
  }
);

export default ProductTable;
