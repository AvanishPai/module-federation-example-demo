import axios from "axios";
import * as React from "react";
import styled from "styled-components";
import ProductCard from "./card";

const Page = styled.div`
  width: 100vw;
  background: #fbfef9;
  margin-top: 60px;
`;

const Products = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const PageTitle = styled.h2`
  color: #000004;
  font-size: 32px;
  font-weight: bold;
  font-family: "Roboto";
  padding-left: 24px;
`;

export default function ProductsPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Page>
      <PageTitle>Products</PageTitle>
      <Products>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Products>
    </Page>
  );
}
