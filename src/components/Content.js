import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Shop from "../views/Shop";

const Content = () => {
  return (
    <StyledContent>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export default Content;
