import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 16px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  font-family: "Roboto";
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 16px;
  width: 150px;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

const Img = styled.img`
  height: 100px;
  widht: 80px;
`;

const Description = styled.p`
  font-size: 12px;
  color: #747474;
  height: 50px;
  margin-bottom: 16px;
`;

const Price = styled.div``;

export default function ProductCard(props) {
  return (
    <Card>
      <Title>{props.product.title}</Title>
      <Img src={props.product.image} />
      <Description>{props.product.title}</Description>
      <Price>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(props.product.price)}
      </Price>
    </Card>
  );
}
