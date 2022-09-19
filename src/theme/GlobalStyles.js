import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Mulish", sans-serif;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
