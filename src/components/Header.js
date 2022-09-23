import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderTitle>Food Emporium</HeaderTitle>
        <Navigation numberOfItems={7} />
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
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export default Header;
