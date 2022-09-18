import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const Content = () => {
  return (
    <StyledContent>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export default Content;
