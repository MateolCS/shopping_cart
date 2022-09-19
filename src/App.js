import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
const App = () => {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
};

export default App;
