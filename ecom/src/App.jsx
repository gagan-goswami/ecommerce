import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/home/cart/CartPage";
import AllProduct from "./pages/allproduct/AllProduct"; // Fixed case
import Login from "./pages/ragistration/Login";
import SignUp from "./pages/ragistration/SignUp";
import UserDeshbord from "./pages/user/UserDeshbord";
import AdminDeshbord from "./pages/admin/AdminDeshbord";

const App = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductInfo" element={<ProductInfo />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserDeshbord" element={<UserDeshbord />} />
        <Route path="/AdminDeshbord" element={<AdminDeshbord/>} />
      </Routes>
    </Router>
  );
}

export default App;
