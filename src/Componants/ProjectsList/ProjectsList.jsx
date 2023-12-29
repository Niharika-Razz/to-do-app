import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const PROJECTS = ["Freelance Project", "SBI Outsource", "HPCL Project 1"];

const ProjectsList = () => {
  return (
    <Container>
      {PROJECTS.map((project) => (
        <Row>
          <Button variant="light">{project}</Button>
        </Row>
      ))}
    </Container>
  );
};

export default ProjectsList;
