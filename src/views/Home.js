import React from "react";
import { TacoImg } from "../imgs/Photos";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeContainer>
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
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 1rem 0;
  min-height: 100%;
  justify-content: space-between;
  border: 1px solid red;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2rem;
    margin: 0.5rem 0;
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
