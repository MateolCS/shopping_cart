import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
const ShoppingCart = ({ cartContent }) => {
  return (
    <ShoppingCartContainer>
      <ShoppingCartWrapper>
        {cartContent.map((item) => {
          return (
            <ShoppingCartItem key={item.meal.id}>
              <ShoppingCartItemName>{item.meal.name}</ShoppingCartItemName>
              <ShoppingCartItemQuantityContainer>
                <FaMinus />
                <ShoppingCartItemQuantity>
                  {item.quantity}
                </ShoppingCartItemQuantity>
                <FaPlus />
              </ShoppingCartItemQuantityContainer>
            </ShoppingCartItem>
          );
        })}
      </ShoppingCartWrapper>
    </ShoppingCartContainer>
  );
};

const ShoppingCartContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.quaternary};
`;

const ShoppingCartWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ShoppingCartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShoppingCartItemName = styled.h5`
  font-size: 1.3rem;
  font-weight: 700;
`;

const ShoppingCartItemQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const ShoppingCartItemQuantity = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.5rem;
`;

export default ShoppingCart;
