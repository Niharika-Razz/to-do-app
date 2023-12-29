import React from "react";
import { Badge } from "react-bootstrap";
import "./TasksList.css";
import { STATUS_STYLES } from "../../Constants";

const TasksList = ({ name }) => {
  const className = STATUS_STYLES[name];
  return (
    <Badge pill className={className}>
      <i class="bi bi-circle-fill" /> {name}
    </Badge>
  );
};

export default TasksList;
