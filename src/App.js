import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./views/Shop";
import Home from "./views/Home";
import { useState } from "react";
const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const isItemAdded = (id) => {
    return selectedItems.some((item) => item.meal.id === id);
  };

  const addItem = (inItem) => {
    if (isItemAdded(inItem.id)) {
      setSelectedItems(
        selectedItems.map((item) =>
          item.meal.id === inItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }
    setSelectedItems([...selectedItems, { meal: inItem, quantity: 1 }]);
  };

  const deleteItem = (inItem) => {
    const newItems = selectedItems
      .map((item) =>
        item.meal.id === inItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setSelectedItems(newItems);
  };

  return (
    <MainWrapper>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/shop"
            element={<Shop onItemAdd={addItem} onItemDelete={deleteItem} />}
          />
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
