import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'iPhone 14', price: 999 },
  { id: 2, name: 'MacBook Pro', price: 1999 },
  { id: 3, name: 'AirPods Pro', price: 249 },
];

function Products() {
  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} md={3} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
