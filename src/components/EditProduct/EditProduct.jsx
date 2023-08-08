import React, { useState } from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';

const EditProduct = ({ showEditModal, handleEditClose, editedProduct }) => {
  const [product, setProduct] = useState(editedProduct);

  const handleInput = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  function saveEditedProduct() {
    console.log();
  };

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">

            <FormControl size="lg" className="my-3" placeholder="Title" value={product.title} onChange={handleInput} name="title" />

            <FormControl size="lg" className="my-3" placeholder="Description" value={product.desc} onChange={handleInput} name="desc" />

            <FormControl size="lg" className="my-3" placeholder="Price" value={product.price} onChange={handleInput} name="price" />

            <FormControl size="lg" className="my-3" placeholder="Image url" value={product.image} onChange={handleInput} name="image" />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="dark" onClick={saveEditedProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProduct