import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TaskBoard.css";

const TaskBoard = () => {
  return (
    <Container>
      <Row className="border-box">
        <Col md={2} className="border-box">
          <p className="task-board-heading">Task boards</p>
        </Col>
        <Col md={10} className="border-box">
          <p className="task-board-heading">My Projects</p>
        </Col>
      </Row>
      <Row className="border-box">
        <Col md={2} className="border-box" >
          3
        </Col>
        <Col  md={10} className="border-box" >
          4
        </Col>
      </Row>
    </Container>
  );
};

export default TaskBoard;
