import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const Header = ({ cartContent }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    setNumberOfItems(cartContent.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartContent]);
  console.log(cartContent);

  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderTitle>Food Emporium</HeaderTitle>
        <Navigation numberOfItems={numberOfItems} />
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    width: 100%;
    padding .7rem 0;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.quaternary};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 1.4rem;
  }
`;

export default Header;
