import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home"; // Ensure correct file name
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/home/cart/CartPage";

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductInfo" element={<ProductInfo />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
