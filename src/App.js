import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
const App = () => {
  return (
    <MainWrapper>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
