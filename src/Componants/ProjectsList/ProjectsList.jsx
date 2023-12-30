import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { PROJECTS } from "../../Constants";
import "./ProjectsList.css";

const ProjectsList = () => {
  return (
    <Container>
      {PROJECTS.map((project) => (
        <Row>
          <Button variant="light" className="project-button">
            {project}
          </Button>
        </Row>
      ))}
    </Container>
  );
};

export default ProjectsList;
