import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = ({ numberOfItems }) => {
  return (
    <StyledNavigation>
      <StyledLink to={"/"}>
        <li>Home</li>
      </StyledLink>
      <StyledLink to={"/shop"}>
        <li>Shop</li>
      </StyledLink>
      <StyledLink to={"/cart"}>
        <CartContainer>
          <CartIcon />
          {numberOfItems !== null && <CartItems>{numberOfItems}</CartItems>}
        </CartContainer>
      </StyledLink>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  li {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.quaternary};
  &:hover {
    font-weight: bold;
  }
`;

const CartContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartItems = styled.p`
  background-color: ${({ theme }) => theme.colors.quaternary};
  position: absolute;
  top: -25px;
  right: -20px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 2rem;
`;

export default Navigation;
