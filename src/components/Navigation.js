import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLink to={"/"}>
        <li>Home</li>
      </StyledLink>
      <StyledLink to={"/shop"}>
        <li>Shop</li>
      </StyledLink>
      <StyledLink to={"/cart"}>
        <li>Cart</li>
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

export default Navigation;
