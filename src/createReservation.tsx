import React from "react";
import { compose, graphql } from "react-apollo";
import styled from "styled-components";
import mutations from "./mutations.graphql";
import StoreSelect from "./storeSelect";
import { gql, useMutation } from "@apollo/client";
import ProductTable from "./productTable";

interface CreateReservationProps {
  createReservation: Function;
}

const Form = styled.form`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4em;
`;

const H1 = styled.h1``;

const Button = styled.button`
  background: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 200px;
`;

const CreateReservation = React.memo(() => {
  const [reservationProducts, setReservationProducts] = React.useState<{
    [key: string]: number;
  }>({});
  const [storeId, setStoreId] = React.useState<string>("");
  const onChangeQuantity = React.useCallback(
    (productId: string, quantity: string) => {
      setReservationProducts((rps) => ({
        ...rps,
        [productId]: parseInt(quantity, 10),
      }));
    },
    []
  );

  const [addReservation, { data }] = useMutation(mutations.CreateReservation);

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log(reservationProducts);

      const mapping = Object.keys(reservationProducts).map((productId) => ({
        productId,
        quantity: reservationProducts[productId],
      }));

      console.log(mapping);

      const result = {
        reservation: { reservationProducts: mapping },
      };

      console.log(result);

      addReservation({
        variables: {
          reservation: { reservationProducts: mapping },
        },
      });
    },
    [reservationProducts]
  );

  return (
    <Form onSubmit={onSubmit}>
      <H1>Create reservation</H1>
      <StoreSelect value={storeId} onChange={setStoreId} />
      <ProductTable storeId={storeId} onChangeQuantity={onChangeQuantity} />
      <Button type="submit">Reserve</Button>
    </Form>
  );
});

export default CreateReservation;
