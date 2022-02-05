import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
