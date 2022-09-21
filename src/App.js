import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./views/Shop";
import Home from "./views/Home";
import { useState } from "react";
const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <MainWrapper>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
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
