import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://6784de3b1ec630ca33a61161.mockapi.io/Products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛍️ Available Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card shadow-lg mb-4">
              <img src={product.Image} className="card-img-top" alt={product.Title} />
              <div className="card-body">
                <h5 className="card-title">{product.Title}</h5>
                <p className="card-text text-muted">{product.Description}</p>
                <p className="card-text fw-bold text-primary">${product.Price}</p>
                <button
                  className="btn btn-success w-100"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
