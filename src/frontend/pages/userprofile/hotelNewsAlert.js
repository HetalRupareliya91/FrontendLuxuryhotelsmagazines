import React from "react";


function DeleteNewsAlert(){
    return(
<Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this hotel?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDeleteHotel}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
    );
}

export default DeleteNewsAlert;