import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer></FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    margin-top: auto;
    width: 100%;
    padding 1rem 0;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.quaternary};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
`;

export default Footer;
