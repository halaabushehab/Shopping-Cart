import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../reduxToolKit/slices/cartSlice';
import { Container, ListGroup, Button } from 'react-bootstrap';

const Cart = () => {
  const cart = useSelector(state => state.cart); // تأكد من أن cart يحتوي على العناصر مباشرة
  const dispatch = useDispatch();

  console.log("🛒 Cart items:", cart); // تحقق من أن Redux يحتوي على بيانات السلة

  const handleRemove = (item) => {
    dispatch(removeFromCart(item)); // إزالة العنصر من السلة
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity >= 0) { // تأكد من أن الكمية لا تكون أقل من 0
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">Shopping Cart</h2>
      <div>
        {cart.length > 0 ? (
          <ListGroup>
            {cart.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.title}</strong> - Quantity: {item.quantity} {/* تأكد من استخدام title بدلاً من name */}
                </div>
                <div>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                    className="me-2"
                  />
                  <Button variant="danger" onClick={() => handleRemove(item)}>Remove</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </Container>
  );
};

export default Cart;