import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Table, Button } from 'react-bootstrap';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from './cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Cart;
