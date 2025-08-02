import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
