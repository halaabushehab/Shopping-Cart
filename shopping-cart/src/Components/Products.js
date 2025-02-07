import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reduxToolKit/slices/productsSlice';
import { addToCart } from '../reduxToolKit/slices/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products = [], loading, error } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Products List</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">Error: {error}</p>}
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button onClick={() => handleAddToCart(product)} variant="primary">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-warning">No products available.</p>
        )}
      </div>
    </Container>
  );
};

export default Products;