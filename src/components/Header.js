import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Header</HeaderTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
    width: 100%;
    padding 1rem 0;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.quaternary};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export default Header;
