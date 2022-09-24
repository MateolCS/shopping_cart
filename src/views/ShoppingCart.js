import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";

const ShoppingCart = ({
  cartContent,
  onItemAdd,
  onItemDelete,
  onDeleteFromCart,
}) => {
  const [total, setTotal] = useState(
    cartContent.reduce((acc, item) => acc + item.meal.price * item.quantity, 0)
  );

  useEffect(() => {}, [cartContent]);

  return (
    <ShoppingCartContainer>
      <ShoppingCartWrapper>
        {cartContent.map((item) => {
          return (
            <ShoppingCartItem key={item.meal.id}>
              <Wrapper>
                <ShoppingCartItemName>{item.meal.name}</ShoppingCartItemName>
                <ShoppingCartItemQuantityContainer>
                  <Minus
                    onClick={() => {
                      onItemDelete(item.meal);
                      setTotal(total - item.meal.price);
                    }}
                  />
                  <ShoppingCartItemQuantity>
                    {item.quantity}
                  </ShoppingCartItemQuantity>
                  <Plus
                    onClick={() => {
                      onItemAdd(item.meal);
                      setTotal(total + item.meal.price);
                    }}
                  />
                </ShoppingCartItemQuantityContainer>
              </Wrapper>
              <Close
                onClick={() => {
                  onDeleteFromCart(item.meal);
                  setTotal(total - item.meal.price * item.quantity);
                }}
              />
            </ShoppingCartItem>
          );
        })}
        <TotalContainer>
          {total !== 0 && <Total>Total: {total}$</Total>}
        </TotalContainer>
      </ShoppingCartWrapper>
    </ShoppingCartContainer>
  );
};

const ShoppingCartContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.quaternary};
`;

const ShoppingCartWrapper = styled.div`
  width: 80%;
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
  font-size: 1.5rem;
  font-weight: 700;
`;

const ShoppingCartItemQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  align-self: center;
`;

const ShoppingCartItemQuantity = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.3rem 0.5rem;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
`;

const Minus = styled(FaMinus)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Plus = styled(FaPlus)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Close = styled(GrClose)`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 1.4rem;
`;

const Total = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export default ShoppingCart;
