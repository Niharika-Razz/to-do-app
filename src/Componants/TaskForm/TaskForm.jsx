import React from "react";
import { Form, Col, Row, Container, FormGroup, Button } from "react-bootstrap";
import { TASK_STATUS } from "../../Constants";

const TaskForm = ({ onCancel, onSubmit }) => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="taskName">
          <Form.Label>Name of the Task</Form.Label>
          <Form.Control size="sm" type="text" placeholder="text" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control size="sm" type="date" />
            </Form.Group>
          </Col>
          <Col>
            <FormGroup className="mb-3" controlId="deadLine">
              <Form.Label>Deadline</Form.Label>
              <Form.Control size="sm" type="date" />
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
            onClick={onSubmit}
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
