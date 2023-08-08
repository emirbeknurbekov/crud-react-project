import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState([]);
  function addProduct(newProduct) {
    let newProducts = [...products];
    newProducts.push(newProduct);

    setProducts(newProducts);
    // setProducts([...products,newProduct])
  }
  console.log(products);
  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct
        show={show}
        handleClose={handleClose}
        addProduct={addProduct}
      />
    </>
  );
};

export default App;
