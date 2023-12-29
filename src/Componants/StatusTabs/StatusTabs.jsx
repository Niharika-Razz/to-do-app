import React from "react";
import { Col, Row } from "react-bootstrap";
import TasksList from "../TasksList/TasksList";
import { STATUS } from "../../Constants";

const StatusTabs = () => {
  return (
    <>
      <Row>
        <Col md={3}>
          <TasksList name={STATUS.TO_DO} />
        </Col>
        <Col md={3}>
          <TasksList name={STATUS.IN_PROGRSS} />
        </Col>
        <Col md={3}>
          <TasksList name={STATUS.IN_REVIEW} />
        </Col>
        <Col md={3}>
          <TasksList name={STATUS.COMPLETED} />
        </Col>
      </Row>
    </>
  );
};

export default StatusTabs;
