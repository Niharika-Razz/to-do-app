import React from "react";
import { Button, Modal } from "react-bootstrap";
import TaskForm from "../TaskForm/TaskForm";

const CreateEditTaskModal = ({ showTaskModal, closeModal }) => {
  return (
    <Modal show={showTaskModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "1.1em" }}>Add new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal} size="sm">
          Close
        </Button>
        <Button variant="primary" onClick={() => {}} size="sm">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateEditTaskModal;
