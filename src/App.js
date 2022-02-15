import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import PurchaseHistory from "./pages/User/PurchaseHistory";
import SalesHistory from "./pages/User/SalesHistory";
import UploadProduct from "./pages/User/UploadProduct";
import Profile from "./pages/User/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route path="/sales-history" element={<SalesHistory />} />
        <Route path="/upload-product" element={<UploadProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
