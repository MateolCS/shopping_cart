import React from "react";
import { TacoImg } from "../imgs/Photos";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeContent>
          <h3>Hungry?</h3>
          <h3>Bored?</h3>
          <h3>Want to eat something yummy?</h3>
          <h3>We've got You covered!</h3>
          <ButtonLink to={"/shop"}>Click here for more!</ButtonLink>
        </HomeContent>
        <HomeContent>
          <img src={TacoImg} alt="taco" />
        </HomeContent>
      </HomeWrapper>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.quaternary};
`;

const HomeWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-top: 10rem;

  h3 {
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 1rem;
  }
`;

const ButtonLink = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.quaternary};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  align-self: flex-start;
  margin-top: 1rem;
`;

export default Home;
