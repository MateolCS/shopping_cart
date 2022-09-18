import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderTitle>Header</HeaderTitle>
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    width: 100%;
    padding 1rem 0;
    background: ${({ theme }) => theme.colors.primary};
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
  font-size: 2rem;
  font-weight: 700;
`;

export default Header;
