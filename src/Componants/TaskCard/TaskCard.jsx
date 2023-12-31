import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { TASK_STATUS_STYLES } from "../../Constants";

const TaskCard = ({ task }) => {
  const className = TASK_STATUS_STYLES[task.status];

  return (
    <Card
      style={{ margin: "1em 1em 0 1em", borderRadius: "1em", width: "15em" }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "1em" }}>{task.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col style={{ fontSize: "0.8em" }}>Start date</Col>
            <Col style={{ fontSize: "0.8em" }}>Deadline</Col>
          </Row>
          <Row>
            <Col>
              <Badge className={className}>{task.startDate}</Badge>
            </Col>
            <Col>
              <Badge className={className}>{task.deadline}</Badge>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
