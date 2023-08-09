import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, getOneProduct, deleteProduct }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" style={{ height: "200px" }} src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Price: ${product.price} <br />
          Description: {product.desc}
        </Card.Text>
        <Button
          onClick={() => deleteProduct(product.id)}
          variant="danger"
          className="m-1"
        >
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
