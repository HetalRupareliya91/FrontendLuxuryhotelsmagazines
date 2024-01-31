import React from "react";
import { Button, Modal } from "react-bootstrap";
import API from "../../../utils";
import axios from "axios";

function HotelDeleteAlert({ showModal, handleCloseModal ,hotel_id }){


    const handleDeleteHotel = async (e) => {
      const token = localStorage.getItem("token");
        e.preventDefault();
    
        const formDatas = new FormData();
        formDatas.append('hotel_id', hotel_id);
        try {
          const response = await axios.post(
            `${API.BASE_URL}${API.ENDPOINTS.deleteHotel}`,
            formDatas,
            {
              headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'multipart/form-data',
              },
            }
          );
            
          if (response.status === 200) {
            // console.log(response.data);
            handleCloseModal();
          } else {
            console.error("Failed to add news");
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
   
      };
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
export default HotelDeleteAlert;