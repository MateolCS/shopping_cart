import React from "react";
import { TacoImg } from "../imgs/Photos";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <h3>Hungry?</h3>
        <h3>Bored?</h3>
        <h3>Want to eat something yummy?</h3>
        <h3>We've got You covered!</h3>
        <button>Click here for more!</button>
      </HomeContent>
      <img src={TacoImg} alt="taco" />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 1rem 0;
  height: 100%;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: left;

  h3 {
    font-size: 2rem;
  }
`;

export default Home;
