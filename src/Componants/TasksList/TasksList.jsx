import React from "react";
import { Badge, Button } from "react-bootstrap";
import "./TasksList.css";
import { STATUS_STYLES } from "../../Constants";

const TasksList = ({ name, showTaskModal }) => {
  const className = STATUS_STYLES[name];
  return (
    <>
      <Badge pill className={className}>
        <i class="bi bi-circle-fill" /> {name}
      </Badge>
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
