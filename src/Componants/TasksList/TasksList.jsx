import React from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";
import "./TasksList.css";
import { TASK_STATUS_STYLES } from "../../Constants";
import TaskCard from "../TaskCard/TaskCard";

const TasksList = ({ name, showTaskModal, tasks }) => {
  const className = TASK_STATUS_STYLES[name];
  console.log(tasks);
  return (
    <>
      <Badge pill className={className}>
        <i class="bi bi-circle-fill" /> {name}
      </Badge>
      <Col>
        {tasks?.map((task) => (
          <Row>
            <TaskCard task={task} />
          </Row>
        ))}
      </Col>
      <div>
        <Button
          size="sm"
          className={"add-new-button " + className}
          onClick={showTaskModal}
        >
          + Add New
        </Button>
      </div>
    </>
  );
};

export default TasksList;
