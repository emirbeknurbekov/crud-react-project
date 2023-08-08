import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
const AddProduct = ({ show, handleClose, addProduct }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function createProduct() {
    if (!title.trim() || !desc.trim() || !price.trim() || !image.trim()) {
      alert("Some inputs are empty ");
      return;
    }

    let newObj = {
      title,
      desc,
      price,
      image,
      id: Date.now(),
    };
    addProduct(newObj);
    setTitle("");
    setDesc("");
    setPrice("");
    setImage("");
    handleClose();
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="descripton"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={createProduct}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
