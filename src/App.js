import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductList from "./components/ProductList/ProductList";
import EditProduct from "./components/EditProduct/EditProduct";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState({});

  function addProduct(newProduct) {
    let newProducts = [...products];
    newProducts.push(newProduct);
    setProducts(newProducts);
    // OR
    // setProducts([...products, newProduct]);
  }
  function getOneProduct(id) {
    let productObj = products.find((product) => product.id === id);
    setEditedProduct(productObj);
    handleEditShow();
  }

  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct
        show={show}
        handleClose={handleClose}
        addProduct={addProduct}
      />
      <ProductList products={products} getOneProduct={getOneProduct} />
      {showEditModal && (
        <EditProduct
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editedProduct={editedProduct}
        />
      )}
    </>
  );
};

export default App;
