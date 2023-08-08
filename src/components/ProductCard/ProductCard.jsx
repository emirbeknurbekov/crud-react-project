import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, getOneProduct }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Price: ${product.price} <br />
          Description: {product.desc}
        </Card.Text>
        <Button variant="danger" className="m-1">
          Delete
        </Button>
        <Button
          onClick={() => getOneProduct(product.id)}
          variant="secondary"
          className="m-1"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
