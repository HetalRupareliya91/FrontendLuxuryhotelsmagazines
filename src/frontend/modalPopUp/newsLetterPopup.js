// ModalComponent.js
import React, { useState } from "react";
import { Image, Modal, Form, Button } from "react-bootstrap";
import Logo from "../../assets/img/logo.svg";

function ModalComponent() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => setShowModal(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // You can send the data to your backend or handle it as needed
    // For now, we'll just close the modal
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="modalpopup">
      <Modal.Header closeButton>
        {/* <Modal.Title>Newsletter Popup</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Image src={Logo} />
        </div>

        <div >
          <h2>Join Our Newsletter</h2>

          <p className="text-center">
            Get the very best of LuxuryHotelsMagazines by signing up to our
            newsletter, full of travel inspiration, fun quizzes, exciting
            competitions and exclusive offers.
          </p>

          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formFullName">
              {/* <Form.Label>Fll Name</Form.Label> */}
              <Form.Control type="text" placeholder="Enter your name" className="mb-4"/>
              
            </Form.Group>

            <Form.Group controlId="formEmail">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Enter your email "
                className="mb-4"
              />
            </Form.Group>
<div className="text-center mt-3">
            <Button  className="popup-submit" type="submit" >
              Subscribe
            </Button>
            </div>
          </Form>
        </div>  
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
