import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty 🛍️</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center">
                    <img
                      src={item.Image}
                      alt={item.Titel}
                      width="50"
                      className="me-3"
                    />
                    {item.Titel}
                  </td>
                  <td className="fw-bold text-primary">${item.Price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() =>
                        dispatch(
                          updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) })
                        )
                      }
                    >
                      ➖
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                      }
                    >
                      ➕
                    </button>
                  </td>
                  <td className="fw-bold text-success">${item.Price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      ❌ Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-end">
            <button className="btn btn-warning" onClick={() => dispatch(clearCart())}>
              🗑️ Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
