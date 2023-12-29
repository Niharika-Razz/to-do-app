import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TasksList from "../TasksList/TasksList";
import { STATUS } from "../../Constants";
import CreateEditTaskModal from "../CreateEditTaskModal/CreateEditTaskModal";

const StatusTabs = () => {
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleClose = () => setShowTaskModal(false);
  const handleShow = () => setShowTaskModal(true);

  return (
    <>
      <CreateEditTaskModal
        showTaskModal={showTaskModal}
        closeModal={handleClose}
      />
      <Row>
        <Col md={3} className="right-boarder">
          <TasksList name={STATUS.TO_DO} showTaskModal={handleShow} />
        </Col>
        <Col md={3} className="right-boarder">
          <TasksList name={STATUS.IN_PROGRSS} showTaskModal={handleShow} />
        </Col>
        <Col md={3} className="right-boarder">
          <TasksList name={STATUS.IN_REVIEW} showTaskModal={handleShow} />
        </Col>
        <Col md={3}>
          <TasksList name={STATUS.COMPLETED} showTaskModal={handleShow} />
        </Col>
      </Row>
    </>
  );
};

export default StatusTabs;
