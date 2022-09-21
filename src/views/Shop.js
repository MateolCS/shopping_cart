import React from "react";
import styled from "styled-components";
const Shop = () => {
  return <ShopWrapper></ShopWrapper>;
};

const ShopWrapper = styled.div`
  height: 100%;
  width: 90%;
`;

const ShopItem = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default Shop;
