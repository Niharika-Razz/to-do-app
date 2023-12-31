import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TasksList from "../TasksList/TasksList";
import { TASK_STATUS, SAMPLE_TASKS } from "../../Constants";
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
          <TasksList
            name={TASK_STATUS.TO_DO}
            showTaskModal={handleShow}
            tasks={SAMPLE_TASKS[TASK_STATUS.TO_DO]}
          />
        </Col>
        <Col md={3} className="right-boarder">
          <TasksList
            name={TASK_STATUS.IN_PROGRSS}
            showTaskModal={handleShow}
            tasks={SAMPLE_TASKS[TASK_STATUS.IN_PROGRSS]}
          />
        </Col>
        <Col md={3} className="right-boarder">
          <TasksList
            name={TASK_STATUS.IN_REVIEW}
            showTaskModal={handleShow}
            tasks={SAMPLE_TASKS[TASK_STATUS.IN_REVIEW]}
          />
        </Col>
        <Col md={3}>
          <TasksList
            name={TASK_STATUS.COMPLETED}
            showTaskModal={handleShow}
            tasks={SAMPLE_TASKS[TASK_STATUS.COMPLETED]}
          />
        </Col>
      </Row>
    </>
  );
};

export default StatusTabs;
