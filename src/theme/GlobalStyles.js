import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: "Mulish", sans-serif;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
