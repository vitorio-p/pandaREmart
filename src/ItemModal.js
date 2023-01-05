import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
function ItemModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.item.image}</Modal.Body>
        <Modal.Footer>
          <button className="btn pink" onClick={handleClose}>
            Add to cart
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ItemModal;
