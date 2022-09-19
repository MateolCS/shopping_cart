import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        Made by @MateoICS
        <a href={"https://github.com/MateolCS"}>
          <GithubLogo />
        </a>
      </FooterContainer>
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
  font-size: 1.2rem;
`;

const GithubLogo = styled(FaGithub)`
  color: ${({ theme }) => theme.colors.quaternary};
  font-size: 1.5rem;
`;

export default Footer;
