import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "../src/Components/Products";
import Cart from "../src/Components/Cart";
import NavBar from "../src/Components/NavBar";



const App = () => {
  return (
    <Router>
           <NavBar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
