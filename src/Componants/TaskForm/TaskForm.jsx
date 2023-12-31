import React, { useState } from "react";
import { Form, Col, Row, Container, FormGroup, Button } from "react-bootstrap";
import { TASK_STATUS } from "../../Constants";

const TaskForm = ({ onCancel, onSubmit }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setValidated(true);
      onSubmit();
    }
  };

  return (
    <Container>
      <Form noValidate validated={validated}>
        <Form.Group className="mb-3" controlId="taskName">
          <Form.Label>Name of the Task</Form.Label>
          <Form.Control size="sm" type="text" placeholder="text" required />
          <Form.Control.Feedback type="invalid">
            Please fill the task name
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control size="sm" type="date" required />
              <Form.Control.Feedback type="invalid">
                Please fill the start date
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <FormGroup className="mb-3" controlId="deadLine">
              <Form.Label>Deadline</Form.Label>
              <Form.Control size="sm" type="date" required />
              <Form.Control.Feedback type="invalid">
                Please fill the deadline date
              </Form.Control.Feedback>
            </FormGroup>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Select size="sm">
            {Object.values(TASK_STATUS).map((status) => (
              <option value={status}>{status}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <div style={{ textAlign: "right" }}>
          <Button variant="secondary" onClick={onCancel} size="sm">
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            size="sm"
            style={{ marginLeft: "1em" }}
          >
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default TaskForm;
