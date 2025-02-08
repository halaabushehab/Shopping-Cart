import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">🛒 MyShop</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">Products</Link>
          <Link className="btn btn-primary" to="/cart">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
