import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
