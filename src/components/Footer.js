import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

const StyledFooter = styled.footer`
    width: 100%;
    padding 1rem 0;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.quaternary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Footer;
