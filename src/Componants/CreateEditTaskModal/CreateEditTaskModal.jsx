import React from "react";
import { Modal } from "react-bootstrap";
import TaskForm from "../TaskForm/TaskForm";

const CreateEditTaskModal = ({ showTaskModal, closeModal }) => {
  return (
    <Modal show={showTaskModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "1.1em" }}>Add new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm onCancel={closeModal} onSubmit={() => {}} />
      </Modal.Body>
    </Modal>
  );
};

export default CreateEditTaskModal;
