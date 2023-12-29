import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./TaskBoard.css";
import ProjectsList from "../../Componants/ProjectsList/ProjectsList";
import StatusTabs from "../../Componants/StatusTabs/StatusTabs";

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
        <Col md={2} className="border-box">
          <ProjectsList />
          <Button variant="link">+ Add New Project</Button>
        </Col>
        <Col md={10} className="border-box">
          <StatusTabs />
        </Col>
      </Row>
    </Container>
  );
};

export default TaskBoard;
