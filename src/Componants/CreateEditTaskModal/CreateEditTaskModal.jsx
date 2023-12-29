import React from "react";
import { Button, Modal } from "react-bootstrap";

const CreateEditTaskModal = ({ showTaskModal, closeModal }) => {
  return (
    <Modal show={showTaskModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "1.1em" }}>Add new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} size="sm">
          Close
        </Button>
        <Button variant="primary" onClick={() => {}} size="sm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateEditTaskModal;
